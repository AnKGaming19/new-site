(function () {
  'use strict';

  // --- Particle canvas, ported near-verbatim from the original ParticleBackground.tsx (Canvas 2D, no deps) ---
  function initParticles(canvas) {
    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    var rafId = null;
    var particles = [];
    var width, height;
    var mouse = { x: -9999, y: -9999 };

    function Particle() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.2;
      this.vy = (Math.random() - 0.5) * 0.2;
      this.size = Math.random() * 1.5 + 0.5;
      this.color = Math.random() > 0.5 ? '0, 240, 255' : '112, 0, 255';
    }
    Particle.prototype.update = function () {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      var dx = mouse.x - this.x;
      var dy = mouse.y - this.y;
      var distance = Math.sqrt(dx * dx + dy * dy);
      var maxDistance = 150;
      if (distance < maxDistance) {
        var force = (maxDistance - distance) / maxDistance;
        this.x -= (dx / distance) * force;
        this.y -= (dy / distance) * force;
      }
    };
    Particle.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + this.color + ', 0.6)';
      ctx.fill();
    };

    function init() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      particles = [];
      var count = Math.floor((width * height) / 25000);
      for (var i = 0; i < count; i++) particles.push(new Particle());
    }

    var lastFrame = 0;
    var frameInterval = 1000 / 30; // cap at ~30fps: halves main-thread cost, no visible difference for slow-drifting dots

    function frame(now) {
      rafId = requestAnimationFrame(frame);
      if (now - lastFrame < frameInterval) return;
      lastFrame = now;

      ctx.clearRect(0, 0, width, height);

      if (mouse.x !== -9999) {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        var gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 300);
        gradient.addColorStop(0, 'rgba(0, 240, 255, 0.1)');
        gradient.addColorStop(0.4, 'rgba(112, 0, 255, 0.05)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 300, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      particles.forEach(function (p) {
        p.update();
        p.draw();
        var dx = mouse.x - p.x;
        var dy = mouse.y - p.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(' + p.color + ', ' + (1 - distance / 120) * 0.3 + ')';
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    }

    function start() {
      if (rafId) return;
      init();
      rafId = requestAnimationFrame(frame);
    }
    function stop() {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    }

    window.addEventListener('resize', init, { passive: true });
    window.addEventListener(
      'mousemove',
      function (e) {
        var rect = canvas.getBoundingClientRect();
        if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
          mouse.x = e.clientX - rect.left;
          mouse.y = e.clientY - rect.top;
        } else {
          mouse.x = -9999;
          mouse.y = -9999;
        }
      },
      { passive: true }
    );

    // Pause the rAF loop entirely while the canvas is off-screen.
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) start();
            else stop();
          });
        },
        { threshold: 0 }
      ).observe(canvas);
    } else {
      start();
    }
  }

  // --- Hero mouse-tilt card: CSS custom properties + a CSS transition do the easing, no spring library needed ---
  function initTilt(container) {
    var card = container.querySelector('.tilt-card');
    if (!card) return;

    container.addEventListener('mousemove', function (e) {
      var rect = container.getBoundingClientRect();
      var relX = (e.clientX - rect.left - rect.width / 2) / rect.width;
      var relY = (e.clientY - rect.top - rect.height / 2) / rect.height;
      card.style.setProperty('--ry', relX * 12 + 'deg');
      card.style.setProperty('--rx', relY * -12 + 'deg');
    });
    container.addEventListener('mouseleave', function () {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  }

  // --- "How it works" connector line: fills as the section scrolls through the viewport ---
  function initConnector(section) {
    var fill = section.querySelector('[data-connector-fill]');
    if (!fill) return;

    var ticking = false;
    function update() {
      var rect = section.getBoundingClientRect();
      var progress = (window.innerHeight - rect.top) / (rect.height + window.innerHeight);
      progress = Math.max(0, Math.min(1, progress));
      fill.style.setProperty('--progress', progress.toFixed(3));
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              window.addEventListener('scroll', onScroll, { passive: true });
              update();
            } else {
              window.removeEventListener('scroll', onScroll);
            }
          });
        },
        { threshold: 0 }
      ).observe(section);
    } else {
      window.addEventListener('scroll', onScroll, { passive: true });
      update();
    }
  }

  document.querySelectorAll('.hero-particles').forEach(initParticles);
  document.querySelectorAll('[data-tilt]').forEach(initTilt);
  document.querySelectorAll('[data-connector-section]').forEach(initConnector);
})();
