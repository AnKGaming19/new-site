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
