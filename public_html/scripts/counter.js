/**
 * counter.js
 * Stat counter / authority bar animation utilities.
 *
 * Two responsibilities:
 *   1. Observe `.authority-bar` entering the viewport and trigger a
 *      class-based entrance animation on `.authority-value` spans.
 *   2. Export a reusable `animateCounter(element, target, duration)` utility
 *      that counts from 0 to a numeric target for future numeric stat displays.
 *
 * The authority bar on index.astro currently uses text values (e.g. "REGISTERED",
 * "R0", "NATIONWIDE"), so the numeric counter utility is available but not called
 * automatically — the class animation handles the visual reveal instead.
 */

(function (global) {
  'use strict';

  /**
   * animateCounter
   * Counts from 0 up to `target` over `duration` milliseconds,
   * updating element.textContent on each animation frame.
   *
   * @param {HTMLElement} element  - The element whose text will be updated
   * @param {number}      target   - The final numeric value to count to
   * @param {number}      duration - Animation duration in milliseconds (default 1500)
   * @param {string}      prefix   - Optional prefix (e.g. "R", "+")
   * @param {string}      suffix   - Optional suffix (e.g. "%", "k")
   */
  function animateCounter(element, target, duration, prefix, suffix) {
    if (!element || typeof target !== 'number') return;

    duration = typeof duration === 'number' ? duration : 1500;
    prefix   = prefix  || '';
    suffix   = suffix  || '';

    var startTime = null;
    var startValue = 0;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed  = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for a natural deceleration
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(startValue + (target - startValue) * eased);

      element.textContent = prefix + current.toLocaleString('en-ZA') + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Ensure exact final value
        element.textContent = prefix + target.toLocaleString('en-ZA') + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  /**
   * initAuthorityBarAnimation
   * Watches for the `.authority-bar` element entering the viewport.
   * When it does, adds `.animated` class to each `.authority-value` span,
   * which can be used as a CSS hook for staggered entrance effects.
   * Also calls animateCounter on any spans with a `data-counter` attribute.
   */
  function initAuthorityBarAnimation() {
    var authorityBar = document.querySelector('.authority-bar');

    if (!authorityBar) return;

    // Fallback for browsers without IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      var values = authorityBar.querySelectorAll('.authority-value');
      values.forEach(function (el) {
        el.classList.add('animated');
        // Numeric counter via data attribute
        var counterTarget = parseInt(el.getAttribute('data-counter'), 10);
        if (!isNaN(counterTarget)) {
          animateCounter(
            el,
            counterTarget,
            1500,
            el.getAttribute('data-prefix') || '',
            el.getAttribute('data-suffix') || ''
          );
        }
      });
      return;
    }

    var hasAnimated = false;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            var values = authorityBar.querySelectorAll('.authority-value');

            values.forEach(function (el, index) {
              // Stagger the class addition using a small delay per item
              setTimeout(function () {
                el.classList.add('animated');

                // If the span has a data-counter attribute, run the numeric animation
                var counterTarget = parseInt(el.getAttribute('data-counter'), 10);
                if (!isNaN(counterTarget)) {
                  animateCounter(
                    el,
                    counterTarget,
                    1500,
                    el.getAttribute('data-prefix') || '',
                    el.getAttribute('data-suffix') || ''
                  );
                }
              }, index * 120);
            });

            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(authorityBar);
  }

  // ── Initialise ───────────────────────────────

  function init() {
    initAuthorityBarAnimation();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose animateCounter as a global utility for use in inline scripts or
  // other modules that may want numeric counter animations in the future.
  global.animateCounter = animateCounter;

})(window);
