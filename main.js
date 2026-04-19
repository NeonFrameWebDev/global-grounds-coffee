(function () {
  'use strict';

  const nav = document.getElementById('nav');
  const burger = document.getElementById('navBurger');
  const mobileMenu = document.getElementById('mobileMenu');
  const progress = document.getElementById('progress');

  function onScroll() {
    const y = window.scrollY || window.pageYOffset;
    const docH = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    if (progress) progress.style.width = (y / docH * 100) + '%';
    if (nav) {
      if (y > 20) nav.style.boxShadow = '0 1px 0 rgba(0,0,0,0.08)';
      else nav.style.boxShadow = '';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function closeMenu() {
    if (!mobileMenu || !burger) return;
    mobileMenu.classList.remove('open');
    mobileMenu.inert = true;
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  function openMenu() {
    if (!mobileMenu || !burger) return;
    mobileMenu.classList.add('open');
    mobileMenu.inert = false;
    burger.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      if (mobileMenu.classList.contains('open')) closeMenu();
      else openMenu();
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const navH = nav ? nav.offsetHeight : 0;
      const y = target.getBoundingClientRect().top + window.scrollY - navH + 1;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.rise').forEach(function (el) { observer.observe(el); });
  } else {
    document.querySelectorAll('.rise').forEach(function (el) { el.classList.add('visible'); });
  }

  const prefersReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const heroBg = document.querySelector('.hero .hero__bg');
  if (heroBg && !prefersReduce) {
    let ticking = false;
    function updateParallax() {
      const y = window.scrollY || window.pageYOffset;
      const max = window.innerHeight;
      if (y < max) {
        heroBg.style.setProperty('--parallax-y', (y * 0.32) + 'px');
      }
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
    updateParallax();
  }

  // Duplicate marquee children so the CSS -50% loop is seamless
  document.querySelectorAll('.marquee__track').forEach(function (track) {
    const kids = Array.from(track.children);
    kids.forEach(function (k) { track.appendChild(k.cloneNode(true)); });
  });
})();
