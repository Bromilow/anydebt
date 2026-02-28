/**
 * scroll-animations.js
 * Vanilla JS scroll-triggered reveal animation system.
 * Uses IntersectionObserver to watch .reveal, .reveal-left, .reveal-right elements
 * and adds .visible when they enter the viewport.
 * CSS transitions are defined in global.css.
 */

(function () {
  'use strict';

  var SELECTORS = '.reveal, .reveal-left, .reveal-right';
  var THRESHOLD = 0.12;

  function initScrollAnimations() {
    var elements = document.querySelectorAll(SELECTORS);

    if (!elements.length) return;

    // If IntersectionObserver is not supported, show all elements immediately
    if (!('IntersectionObserver' in window)) {
      elements.forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once revealed, unobserve to save resources
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: THRESHOLD,
        // Slight negative root margin so elements start animating just
        // as they become meaningfully visible, not the instant a pixel appears
        rootMargin: '0px 0px -32px 0px',
      }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // Initialise after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    // DOM already parsed (e.g. script loaded with defer)
    initScrollAnimations();
  }
})();
