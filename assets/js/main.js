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

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var answer = document.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded', String(!expanded));
      if (answer) answer.classList.toggle('hidden', expanded);
      var chevron = btn.querySelector('.faq-chevron');
      if (chevron) chevron.classList.toggle('is-open', !expanded);
    });
  });

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

  // Remember explicit language choice so "/" redirects consistently next visit
  document.querySelectorAll('a[hreflang]').forEach(function (link) {
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
    document.querySelector('.hero-particles') || document.querySelector('[data-tilt]') || document.querySelector('[data-connector-fill]');
  if (needsMotion && !reducedMotion) {
    var s = document.createElement('script');
    s.src = '/assets/js/motion.js';
    s.defer = true;
    document.body.appendChild(s);
  }
})();
