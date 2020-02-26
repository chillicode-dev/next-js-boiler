// Vendor
import smoothScroll from 'smoothscroll-polyfill';
// Internals
import {isClient} from './env';

// Init polyfill for smooth scroll support only on client
if (isClient()) {
  smoothScroll.polyfill();
}

/**
 * Gets element id and scrolls to this smoothly
 * @param {string} elementId
 * @returns {void}
 */
export const scrollToElementById = elementId => {
  if (isClient()) {
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
      const offset = targetElement.getBoundingClientRect().y;
      window.scroll({
        top: offset,
        behavior: 'smooth',
      });
    }
  }
};

/**
 * Gets element id from URL hash and scrolls to this smoothly
 * @returns {void}
 */
export const scrollToElementByHash = () => {
  if (isClient()) {
    const {hash} = window.location;
    const id = hash.slice(1);
    scrollToElementById(id);
  }
};
