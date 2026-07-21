(function () {
  'use strict';

  // Mobile nav toggle
  var navToggle = document.getElementById('nav-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.querySelector('.nav-open-icon').classList.toggle('hidden', isOpen);
      navToggle.querySelector('.nav-close-icon').classList.toggle('hidden', !isOpen);
    });
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
})();
