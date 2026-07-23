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
    navToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
      navToggle.querySelector('.nav-open-icon').classList.toggle('hidden', isOpen);
      navToggle.querySelector('.nav-close-icon').classList.toggle('hidden', !isOpen);
    });
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

  // Contact form (ported from Contact.tsx's Formspree fetch pattern)
  var contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    var successPanel = document.querySelector('[data-form-success]');
    var errorMsg = contactForm.querySelector('[data-form-error]');
    var submitBtn = contactForm.querySelector('[data-submit-btn]');
    var submitLabelEl = contactForm.querySelector('[data-submit-label-el]');
    var submitSpinner = contactForm.querySelector('[data-submit-spinner]');
    var sendAnotherBtn = successPanel && successPanel.querySelector('[data-send-another]');
    var submitLabel = contactForm.getAttribute('data-submit-label');
    var submittingLabel = contactForm.getAttribute('data-submitting-label');

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      errorMsg.classList.add('hidden');
      submitBtn.disabled = true;
      if (submitLabelEl) submitLabelEl.textContent = submittingLabel;
      if (submitSpinner) submitSpinner.classList.remove('hidden');

      fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' },
      })
        .then(function (res) {
          if (res.ok) {
            contactForm.reset();
            contactForm.classList.add('hidden');
            if (successPanel) {
              successPanel.classList.remove('hidden');
              successPanel.classList.add('flex');
            }
          } else {
            errorMsg.classList.remove('hidden');
          }
        })
        .catch(function () {
          errorMsg.classList.remove('hidden');
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
        contactForm.classList.remove('hidden');
      });
    }
  }

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
