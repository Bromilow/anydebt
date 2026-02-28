/**
 * accordion.js
 * FAQ accordion — one item open at a time.
 * Expects the following HTML structure:
 *
 *   <div class="faq-item">
 *     <button class="faq-question" aria-expanded="false">Question text</button>
 *     <div class="faq-answer">Answer content</div>
 *   </div>
 *
 * CSS in global.css handles the max-height transition:
 *   .faq-answer          { max-height: 0; overflow: hidden; transition: max-height 0.35s ease; }
 *   .faq-answer.open     { max-height: 600px; }
 */

(function () {
  'use strict';

  function initAccordion() {
    var questions = document.querySelectorAll('.faq-question');

    if (!questions.length) return;

    function closeAll() {
      questions.forEach(function (btn) {
        btn.setAttribute('aria-expanded', 'false');
        var answer = btn.nextElementSibling;
        if (answer && answer.classList.contains('faq-answer')) {
          answer.classList.remove('open');
        }
      });
    }

    function openItem(btn) {
      var answer = btn.nextElementSibling;
      btn.setAttribute('aria-expanded', 'true');
      if (answer && answer.classList.contains('faq-answer')) {
        answer.classList.add('open');
      }
    }

    questions.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var isCurrentlyOpen = btn.getAttribute('aria-expanded') === 'true';

        // Close all items first
        closeAll();

        // If this item was closed, open it; if it was already open, leave it closed
        if (!isCurrentlyOpen) {
          openItem(btn);
        }
      });

      // Keyboard support: open/close with Enter or Space
      btn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ' || e.keyCode === 13 || e.keyCode === 32) {
          e.preventDefault();
          btn.click();
        }
        // Arrow key navigation between questions
        if (e.key === 'ArrowDown' || e.keyCode === 40) {
          e.preventDefault();
          var questionsArr = Array.prototype.slice.call(questions);
          var idx = questionsArr.indexOf(btn);
          var next = questionsArr[idx + 1];
          if (next) next.focus();
        }
        if (e.key === 'ArrowUp' || e.keyCode === 38) {
          e.preventDefault();
          var questionsArr = Array.prototype.slice.call(questions);
          var idx = questionsArr.indexOf(btn);
          var prev = questionsArr[idx - 1];
          if (prev) prev.focus();
        }
      });
    });
  }

  // Initialise after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccordion);
  } else {
    initAccordion();
  }
})();
