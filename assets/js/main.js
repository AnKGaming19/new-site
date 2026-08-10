(function () {
  'use strict';

  // Presence of this class is what lets CSS hide .reveal elements pre-animation —
  // if this script never runs (JS disabled/blocked), .reveal content stays visible.
  document.documentElement.classList.add('js');

  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile nav toggle
  var navToggle = document.getElementById('nav-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  if (navToggle && mobileMenu) {
    var setMenu = function (isOpen) {
      mobileMenu.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
      // Lets the CSS drop the nav's scrolled blur/background so it doesn't sit as a
      // translucent strip on top of the full-screen menu.
      document.body.classList.toggle('nav-open', isOpen);
      navToggle.querySelector('.nav-open-icon').classList.toggle('hidden', isOpen);
      navToggle.querySelector('.nav-close-icon').classList.toggle('hidden', !isOpen);
    };

    navToggle.addEventListener('click', function () {
      setMenu(!mobileMenu.classList.contains('is-open'));
    });

    // Every menu entry is a same-page #hash link, so tapping one fires no navigation:
    // without this the overlay would stay up (and body scroll stay locked) and the link
    // would look dead. Closing here, before the default action, lets the hash jump land.
    mobileMenu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) setMenu(false);
    });

    // Rotating/resizing to the desktop breakpoint hides the overlay via `xl:hidden` but
    // would otherwise leave the body scroll-locked with no visible way to unlock it.
    var desktopQuery = window.matchMedia('(min-width: 1280px)');
    var onDesktopChange = function (e) {
      if (e.matches && mobileMenu.classList.contains('is-open')) setMenu(false);
    };
    if (desktopQuery.addEventListener) desktopQuery.addEventListener('change', onDesktopChange);
    else if (desktopQuery.addListener) desktopQuery.addListener(onDesktopChange);
  }

  // Nav scroll-aware blur (ported from Navbar.tsx), rAF-throttled
  var siteNav = document.querySelector('.site-nav');
  if (siteNav) {
    var navTicking = false;
    var updateNav = function () {
      siteNav.classList.toggle('is-scrolled', window.scrollY > 50);
      navTicking = false;
    };
    window.addEventListener(
      'scroll',
      function () {
        if (!navTicking) {
          requestAnimationFrame(updateNav);
          navTicking = true;
        }
      },
      { passive: true }
    );
    updateNav();
  }

  // FAQ accordion is native <details>/<summary> now (see input.css) - no JS needed,
  // which also means it fully works with JS disabled.

  // Pricing monthly/annual toggle
  var pricingToggle = document.getElementById('pricing-toggle');
  if (pricingToggle) {
    var buttons = pricingToggle.querySelectorAll('.pricing-toggle-btn');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var period = btn.getAttribute('data-pricing-period');
        buttons.forEach(function (b) {
          b.setAttribute('aria-pressed', String(b === btn));
        });
        document.querySelectorAll('.price-monthly').forEach(function (el) {
          el.classList.toggle('hidden', period !== 'monthly');
        });
        document.querySelectorAll('.price-annual').forEach(function (el) {
          el.classList.toggle('hidden', period !== 'annual');
        });
      });
    });
  }

  // Async forms: the homepage contact form (Formspree, multipart) and the
  // book-a-demo form (/api/book-demo, JSON). Same markup hooks either way —
  // data-encoding="json" is what picks the JSON body, which is what the
  // serverless function expects.
  document.querySelectorAll('[data-contact-form]').forEach(function (form) {
    // Scope to the form's own card so a page could carry more than one.
    var wrapper = form.closest('[data-form-wrapper]') || document;
    var successPanel = wrapper.querySelector('[data-form-success]');
    var errorMsg = form.querySelector('[data-form-error]');
    var submitBtn = form.querySelector('[data-submit-btn]');
    var submitLabelEl = form.querySelector('[data-submit-label-el]');
    var submitSpinner = form.querySelector('[data-submit-spinner]');
    var sendAnotherBtn = successPanel && successPanel.querySelector('[data-send-another]');
    var submitLabel = form.getAttribute('data-submit-label');
    var submittingLabel = form.getAttribute('data-submitting-label');
    var asJson = form.getAttribute('data-encoding') === 'json';

    var requestInit = function () {
      var data = new FormData(form);
      if (!asJson) {
        return { method: 'POST', body: data, headers: { Accept: 'application/json' } };
      }
      var payload = {};
      data.forEach(function (value, key) {
        payload[key] = value;
      });
      return {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      };
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (errorMsg) errorMsg.classList.add('hidden');
      submitBtn.disabled = true;
      if (submitLabelEl) submitLabelEl.textContent = submittingLabel;
      if (submitSpinner) submitSpinner.classList.remove('hidden');

      fetch(form.action, requestInit())
        .then(function (res) {
          if (res.ok) {
            form.reset();
            form.classList.add('hidden');
            if (successPanel) {
              successPanel.classList.remove('hidden');
              successPanel.classList.add('flex');
              successPanel.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' });
            }
          } else if (errorMsg) {
            errorMsg.classList.remove('hidden');
          }
        })
        .catch(function () {
          if (errorMsg) errorMsg.classList.remove('hidden');
        })
        .finally(function () {
          submitBtn.disabled = false;
          if (submitLabelEl) submitLabelEl.textContent = submitLabel;
          if (submitSpinner) submitSpinner.classList.add('hidden');
        });
    });

    if (sendAnotherBtn) {
      sendAnotherBtn.addEventListener('click', function () {
        successPanel.classList.add('hidden');
        successPanel.classList.remove('flex');
        form.classList.remove('hidden');
      });
    }
  });

  // Language switch: preserve the current section (#hash) across languages, and
  // remember the explicit choice so "/" redirects consistently next visit.
  document.querySelectorAll('[data-lang-switch]').forEach(function (link) {
    if (location.hash) {
      link.setAttribute('href', link.getAttribute('href') + location.hash);
    }
    link.addEventListener('click', function () {
      try {
        localStorage.setItem('aianchor-lang', link.getAttribute('hreflang') === 'en' ? 'en' : 'gr');
      } catch (e) {}
    });
  });

  // Features bento: cursor-spotlight glow follows the pointer across each tile.
  // Purely decorative, so it's skipped for reduced-motion and non-hover (touch) devices;
  // the CSS glow still centres itself there, and everything degrades to static with JS off.
  var canHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (canHover && !reducedMotion) {
    document.querySelectorAll('.spotlight-card').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', e.clientX - r.left + 'px');
        card.style.setProperty('--my', e.clientY - r.top + 'px');
      });
    });
  }

  // Scroll-triggered reveals (ported whileInView behavior from the original Framer Motion sections)
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) {
        el.classList.add('in-view');
      });
    } else {
      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
      );
      revealEls.forEach(function (el) {
        revealObserver.observe(el);
      });
    }
  }

  // --- Cookie consent wizard -------------------------------------------------
  // Two steps in one card: the ask, then per-category preferences. The decision lives in
  // localStorage (this site sets no cookies of its own, so there is nothing to store one
  // in) and is re-asked whenever CONSENT_VERSION changes - i.e. when the categories or
  // the vendors behind them change and the old answer no longer covers them.
  var consentRoot = document.getElementById('cookie-consent');
  if (consentRoot) {
    var CONSENT_KEY = 'aianchor-consent';
    var CONSENT_VERSION = 1;
    var OPTIONAL_CATEGORIES = ['analytics', 'marketing'];

    var card = consentRoot.querySelector('.cookie-consent-card');
    var steps = consentRoot.querySelectorAll('[data-cookie-step]');
    var toggles = consentRoot.querySelectorAll('[data-cookie-toggle]');
    var lastFocused = null;
    var hideTimer = null;

    var readConsent = function () {
      try {
        var raw = localStorage.getItem(CONSENT_KEY);
        if (!raw) return null;
        var parsed = JSON.parse(raw);
        if (!parsed || parsed.version !== CONSENT_VERSION || !parsed.categories) return null;
        return parsed;
      } catch (e) {
        return null;
      }
    };

    // Scripts can opt into a category by shipping as <script type="text/plain"
    // data-cookie-category="analytics">. Vercel Analytics uses this gate, and future
    // optional scripts (pixels, etc.) can follow the same pattern.
    var activateGatedScripts = function (categories) {
      document.querySelectorAll('script[type="text/plain"][data-cookie-category]').forEach(function (node) {
        if (!categories[node.getAttribute('data-cookie-category')]) return;
        var script = document.createElement('script');
        for (var i = 0; i < node.attributes.length; i++) {
          var attr = node.attributes[i];
          if (attr.name !== 'type' && attr.name !== 'data-cookie-category') script.setAttribute(attr.name, attr.value);
        }
        script.text = node.text;
        node.parentNode.replaceChild(script, node);
      });
    };

    var applyConsent = function (categories) {
      window.AiAnchorConsent.categories = categories;
      activateGatedScripts(categories);
      document.dispatchEvent(new CustomEvent('aianchor:consent', { detail: categories }));
    };

    var showStep = function (index, direction) {
      steps.forEach(function (step, i) {
        var active = i === index;
        step.hidden = !active;
        step.removeAttribute('data-cookie-enter');
        if (active && direction && !reducedMotion) {
          // Force a reflow so re-entering the same step replays the animation.
          void step.offsetWidth;
          step.setAttribute('data-cookie-enter', direction);
        }
      });
      var focusTarget = steps[index].querySelector('button');
      if (direction && focusTarget) focusTarget.focus();
    };

    var open = function (stepIndex) {
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
      lastFocused = document.activeElement;
      consentRoot.hidden = false;
      consentRoot.classList.remove('is-leaving');
      consentRoot.classList.add('is-visible');
      showStep(stepIndex || 0, null);
      // First visit: leave focus where it is (the banner already sits first in the tab
      // order). Reopened from the footer: it's a deliberate action, so move focus in.
      if (stepIndex) card.focus();
    };

    var close = function () {
      consentRoot.classList.add('is-leaving');
      var finish = function () {
        consentRoot.hidden = true;
        consentRoot.classList.remove('is-visible', 'is-leaving');
        showStep(0, null);
      };
      if (reducedMotion) finish();
      else hideTimer = setTimeout(finish, 240);
      if (lastFocused && lastFocused.focus) lastFocused.focus();
      lastFocused = null;
    };

    var save = function (categories) {
      var record = { version: CONSENT_VERSION, date: new Date().toISOString(), categories: categories };
      try {
        localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
      } catch (e) {
        // Private mode / storage blocked: honour the choice for this page view only.
      }
      applyConsent(categories);
      close();
    };

    var currentToggleState = function () {
      var categories = { necessary: true };
      OPTIONAL_CATEGORIES.forEach(function (id) {
        categories[id] = false;
      });
      toggles.forEach(function (btn) {
        categories[btn.getAttribute('data-cookie-toggle')] = btn.getAttribute('aria-checked') === 'true';
      });
      return categories;
    };

    var setToggles = function (categories) {
      toggles.forEach(function (btn) {
        btn.setAttribute('aria-checked', String(!!categories[btn.getAttribute('data-cookie-toggle')]));
      });
    };

    var allOf = function (value) {
      var categories = { necessary: true };
      OPTIONAL_CATEGORIES.forEach(function (id) {
        categories[id] = value;
      });
      return categories;
    };

    toggles.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btn.setAttribute('aria-checked', String(btn.getAttribute('aria-checked') !== 'true'));
      });
    });

    consentRoot.querySelectorAll('[data-cookie-accept]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setToggles(allOf(true));
        save(allOf(true));
      });
    });
    consentRoot.querySelectorAll('[data-cookie-reject]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setToggles(allOf(false));
        save(allOf(false));
      });
    });
    consentRoot.querySelectorAll('[data-cookie-save]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        save(currentToggleState());
      });
    });
    consentRoot.querySelectorAll('[data-cookie-customize]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        showStep(1, 'forward');
      });
    });
    consentRoot.querySelectorAll('[data-cookie-back]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        showStep(0, 'back');
      });
    });

    // Escape steps back rather than dismissing: closing without an answer would be
    // indistinguishable from consent, which is exactly what it must not be.
    consentRoot.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if (!steps[1].hidden) showStep(0, 'back');
    });

    // Footer entry point, so a decision can be reviewed or withdrawn at any time.
    document.querySelectorAll('[data-cookie-settings]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        open(1);
      });
    });

    var stored = readConsent();
    window.AiAnchorConsent = {
      categories: stored ? stored.categories : allOf(false),
      allows: function (category) {
        return !!window.AiAnchorConsent.categories[category];
      },
      open: function () {
        open(1);
      },
    };

    if (stored) {
      setToggles(stored.categories);
      applyConsent(stored.categories);
    } else {
      open(0);
    }
  }

  // --- Anchor: support assistant --------------------------------------------
  // The widget markup ships hidden; chat.js is what reveals it, so a failed or blocked
  // fetch leaves no dead launcher in the corner. Loaded after first paint because nobody
  // opens a support chat before the page has rendered.
  if (document.getElementById('chat-widget')) {
    var loadChat = function () {
      var c = document.createElement('script');
      c.src = '/assets/js/chat.js';
      c.defer = true;
      document.body.appendChild(c);
    };
    if ('requestIdleCallback' in window) requestIdleCallback(loadChat, { timeout: 3000 });
    else setTimeout(loadChat, 1200);
  }

  // The heavier ambient-motion module (particle canvas, hero tilt, connector scroll-fill)
  // is only fetched when it has something to do and the user hasn't asked for less motion.
  var needsMotion =
    document.querySelector('.particle-bg') || document.querySelector('[data-tilt]') || document.querySelector('[data-connector-fill]');
  if (needsMotion && !reducedMotion) {
    var s = document.createElement('script');
    s.src = '/assets/js/motion.js';
    s.defer = true;
    document.body.appendChild(s);
  }
})();
