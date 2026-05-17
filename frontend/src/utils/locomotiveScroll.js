/**
 * Locomotive Scroll Utility Functions
 * 
 * This file contains helper functions for working with Locomotive Scroll
 * Use these in your components to interact with the scroll instance
 * 
 * Example:
 * import { scrollToElement, getScrollInstance } from '@/utils/locomotiveScroll';
 * 
 * const instance = getScrollInstance();
 * scrollToElement('#my-element');
 */

/**
 * Get the current Locomotive Scroll instance
 * 
 * @returns {LocomotiveScroll|null} The scroll instance or null if not initialized
 * 
 * Usage:
 * const instance = getScrollInstance();
 * if (instance) {
 *   instance.update();
 * }
 */
export const getScrollInstance = () => {
  // Return the globally stored Locomotive Scroll instance
  return window.__locomotiveScrollInstance || null;

/**
 * Scroll to a specific element
 * 
 * @param {string|HTMLElement} target - CSS selector or element
 * @param {object} options - Scroll options
 * 
 * Usage:
 * scrollToElement('#my-element', { duration: 1000, offset: 100 });
 */
export const scrollToElement = (target, options = {}) => {
  const instance = getScrollInstance();
  if (!instance) {
    console.warn('Locomotive Scroll instance not found');
    return;
  }

  const element =
    typeof target === 'string' ? document.querySelector(target) : target;

  if (!element) {
    console.warn('Target element not found:', target);
    return;
  }

  try {
    instance.scrollTo(element, {
      duration: options.duration || 1000,
      offset: options.offset || 0,
      ...options,
    });
  } catch (error) {
    console.error('Error scrolling to element:', error);
  }
};

/**
 * Scroll to a specific position (pixels)
 * 
 * @param {number} position - Scroll position in pixels
 * @param {object} options - Scroll options
 * 
 * Usage:
 * scrollToPosition(500, { duration: 800 });
 */
export const scrollToPosition = (position, options = {}) => {
  const instance = getScrollInstance();
  if (!instance) {
    console.warn('Locomotive Scroll instance not found');
    return;
  }

  try {
    instance.scrollTo(position, {
      duration: options.duration || 1000,
      ...options,
    });
  } catch (error) {
    console.error('Error scrolling to position:', error);
  }
};

/**
 * Update Locomotive Scroll after dynamic content changes
 * Call this after adding/removing elements
 * 
 * Usage:
 * useEffect(() => {
 *   updateScroll();
 * }, [dynamicContent]);
 */
export const updateScroll = () => {
  const instance = getScrollInstance();
  if (!instance) {
    console.warn('Locomotive Scroll instance not found');
    return;
  }

  try {
    instance.update();
  } catch (error) {
    console.error('Error updating scroll:', error);
  }
};

/**
 * Destroy and reinitialize Locomotive Scroll
 * Use if you need to fully reset the scroll
 * 
 * Usage:
 * reinitializeScroll();
 */
export const reinitializeScroll = () => {
  const instance = getScrollInstance();
  if (!instance) {
    console.warn('Locomotive Scroll instance not found');
    return;
  }

  try {
    instance.destroy();
    // Re-initialization will happen automatically via hook
  } catch (error) {
    console.error('Error reinitializing scroll:', error);
  }
};

/**
 * Get current scroll speed (useful for parallax effects)
 * 
 * @returns {number} Current scroll speed
 * 
 * Usage:
 * const speed = getScrollSpeed();
 * console.log('Scroll speed:', speed);
 */
export const getScrollSpeed = () => {
  const instance = getScrollInstance();
  if (!instance) return 0;
  return instance.speed || 0;
};

/**
 * Get current scroll direction
 * 
 * @returns {string} 'down', 'up', or 'none'
 * 
 * Usage:
 * const direction = getScrollDirection();
 */
export const getScrollDirection = () => {
  const instance = getScrollInstance();
  if (!instance) return 'none';
  return instance.direction || 'none';
};

/**
 * Listen to scroll events using the custom 'locomotiveScroll' event
 * 
 * @param {Function} callback - Function to call on scroll with data { scroll, limit, velocity, direction, progress }
 * @returns {Function} Unsubscribe function
 * 
 * Usage:
 * const unsubscribe = onScroll(({ scroll, limit, velocity, direction, progress }) => {
 *   console.log('Scroll position:', scroll);
 * });
 * 
 * // Later: unsubscribe();
 */
export const onScroll = (callback) => {
  const listener = (event) => {
    if (event.detail) {
      callback(event.detail);
    }
  };

  window.addEventListener('locomotiveScroll', listener);

  // Return unsubscribe function
  return () => {
    window.removeEventListener('locomotiveScroll', listener);
  };
};

/**
 * Disable scroll temporarily (useful for modals, etc.)
 * 
 * Usage:
 * disableScroll();
 * // Later:
 * enableScroll();
 */
export const disableScroll = () => {
  const instance = getScrollInstance();
  if (!instance) return;

  try {
    instance.stop();
  } catch (error) {
    console.warn('Error disabling scroll:', error);
  }
};

/**
 * Re-enable scroll after being disabled
 * 
 * Usage:
 * enableScroll();
 */
export const enableScroll = () => {
  const instance = getScrollInstance();
  if (!instance) return;

  try {
    instance.start();
  } catch (error) {
    console.warn('Error enabling scroll:', error);
  }
};

/**
 * Get current scroll position
 * 
 * @returns {object} Current scroll position {x, y}
 * 
 * Usage:
 * const {x, y} = getScrollPosition();
 */
export const getScrollPosition = () => {
  const instance = getScrollInstance();
  if (!instance || !instance.scroll) {
    return { x: 0, y: 0 };
  }
  return {
    x: instance.scroll.x || 0,
    y: instance.scroll.y || 0,
  };
};

export default {
  getScrollInstance,
  scrollToElement,
  scrollToPosition,
  updateScroll,
  reinitializeScroll,
  getScrollSpeed,
  getScrollDirection,
  onScroll,
  disableScroll,
  enableScroll,
  getScrollPosition,
};
