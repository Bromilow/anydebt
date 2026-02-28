/**
 * mobile-menu.js
 * Handles the mobile hamburger menu open/close behaviour.
 * Targets:
 *   #hamburger       — toggle button
 *   #mobileMenu      — the full-screen slide-in panel
 *   #mobileOverlay   — dark backdrop behind the menu
 * Includes: aria state management, Escape key close, body scroll lock,
 * close-on-overlay-click, and optional focus trapping.
 */

(function () {
  'use strict';

  function initMobileMenu() {
    var hamburger    = document.getElementById('hamburger');
    var mobileMenu   = document.getElementById('mobileMenu');
    var mobileOverlay = document.getElementById('mobileOverlay');
    var mobileMenuClose = document.getElementById('mobileMenuClose');

    // Guard: nothing to do if elements are absent (non-mobile pages)
    if (!hamburger || !mobileMenu) return;

    var isOpen = false;

    // Collect all focusable elements inside the menu for focus trapping
    var FOCUSABLE = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    function getFocusableEls() {
      return Array.prototype.slice.call(mobileMenu.querySelectorAll(FOCUSABLE));
    }

    function openMenu() {
      isOpen = true;
      hamburger.classList.add('open');
      mobileMenu.classList.add('open');
      if (mobileOverlay) mobileOverlay.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      mobileMenu.setAttribute('aria-hidden', 'false');
      // Lock body scroll
      document.body.style.overflow = 'hidden';
      // Move focus into menu for accessibility
      var focusable = getFocusableEls();
      if (focusable.length) {
        focusable[0].focus();
      }
    }

    function closeMenu() {
      isOpen = false;
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      if (mobileOverlay) mobileOverlay.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      // Restore body scroll
      document.body.style.overflow = '';
      // Return focus to the trigger button
      hamburger.focus();
    }

    function toggleMenu() {
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    // ── Event Listeners ──────────────────────────

    hamburger.addEventListener('click', toggleMenu);

    // Close button inside menu
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', closeMenu);
    }

    // Close when overlay (backdrop) is clicked
    if (mobileOverlay) {
      mobileOverlay.addEventListener('click', closeMenu);
    }

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (isOpen && (e.key === 'Escape' || e.keyCode === 27)) {
        closeMenu();
      }
    });

    // Focus trap: keep Tab and Shift+Tab cycling within the open menu
    mobileMenu.addEventListener('keydown', function (e) {
      if (!isOpen) return;
      if (e.key !== 'Tab' && e.keyCode !== 9) return;

      var focusable = getFocusableEls();
      if (!focusable.length) return;

      var first = focusable[0];
      var last  = focusable[focusable.length - 1];

      if (e.shiftKey) {
        // Shift+Tab: if focus is on first element, wrap to last
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // Tab: if focus is on last element, wrap to first
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    // Close menu when an internal navigation link is clicked
    // (handles SPA-style navigation and same-page anchors)
    var navLinks = mobileMenu.querySelectorAll('a[href]');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });
  }

  // Initialise after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
})();
