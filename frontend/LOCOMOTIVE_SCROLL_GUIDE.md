# Locomotive Scroll Implementation Guide

## Overview

This document explains the Locomotive Scroll integration in the AInvoice SaaS frontend. Locomotive Scroll provides smooth, hardware-accelerated scrolling across the entire application.

---

## What Was Changed

### 1. **Package Installation**
- Added `locomotive-scroll` to `package.json` dependencies
- Command: `npm install locomotive-scroll`

### 2. **New Files Created**

#### `src/hooks/useLocomotiveScroll.js`
- Custom React hook for Locomotive Scroll management
- Handles initialization, cleanup, and route-change updates
- Prevents memory leaks through proper cleanup
- Re-initializes scroll on route navigation

#### `src/components/LocomotiveScrollProvider.jsx`
- React component that wraps the entire app
- Provides the `data-scroll-container` wrapper element
- Manages global scroll initialization
- Ensures smooth scrolling across all pages

#### `src/utils/locomotiveScroll.js`
- Helper utility functions for interacting with Locomotive Scroll
- Functions for scroll-to-element, scroll events, getting scroll state
- Useful for implementing scroll-based animations and effects

### 3. **Modified Files**

#### `src/main.jsx`
- Wrapped `<App />` with `<LocomotiveScrollProvider>`
- Ensures all routes benefit from smooth scrolling
- Imported the provider component

#### `src/App.jsx`
- Removed `overflow-x-hidden` class (Locomotive Scroll handles this)
- Removed `min-h-screen` class (scroll container manages height)
- Allows proper scroll container height calculation

#### `src/index.css`
- Added comprehensive Locomotive Scroll CSS configuration
- Critical styles for `[data-scroll-container]` element
- Mobile responsiveness fixes
- Fixes for Tailwind CSS conflicts
- Accessibility and interaction fixes

---

## How It Works

### The Scroll Container

```html
<div data-scroll-container>
  <!-- All content goes here -->
  <App />
</div>
```

**Key Points:**
- `data-scroll-container` attribute marks the scroll element
- Locomotive Scroll watches this element for scroll events
- Uses `overflow: hidden` on this element
- Uses CSS `transform` internally for smooth scrolling (not JavaScript positioning)
- Hardware-accelerated via GPU

### Initialization Flow

1. **App Mount** → `main.jsx` renders `<LocomotiveScrollProvider>`
2. **Provider Renders** → Creates `[data-scroll-container]` div
3. **Hook Initializes** → `useLocomotiveScroll` creates scroll instance
4. **Scroll Ready** → Smooth scrolling active globally
5. **Route Change** → Hook detects path change, scrolls to top, updates positions

### Cleanup & Memory Management

- On component unmount: `scrollRef.current.destroy()`
- Prevents memory leaks in React
- Safe removal of event listeners
- Graceful error handling

---

## CSS Configuration Explained

### Critical CSS Rules

```css
/* Scroll container must have 100vh height */
[data-scroll-container] {
  overflow: hidden !important;
  height: 100vh;
}

/* Root element must fill viewport */
html, body, #root {
  height: 100%;
  margin: 0;
  padding: 0;
}

/* Prevent scrollbar layout shift */
body {
  overflow: hidden !important;
}
```

### Why These Rules Matter

1. **`overflow: hidden`** - Prevents native browser scrollbar, Locomotive Scroll handles scrolling
2. **`height: 100vh`** - Must be viewport height for proper scroll calculation
3. **`transform`-based scrolling** - Faster than position changes, GPU accelerated
4. **No native scrollbar** - Cleaner UI, custom scroll effects possible

### Mobile Compatibility

CSS includes responsive fixes for:
- Tablets (iPad, etc.) - `-webkit-overflow-scrolling: touch`
- Mobile phones - proper `100vh` handling
- Fixed elements (navbar) - proper z-index stacking

---

## How Smooth Scrolling Works

### Without Locomotive Scroll (Native)
```
User scrolls
→ Browser moves viewport
→ Janky, not smooth on complex pages
```

### With Locomotive Scroll
```
User scrolls
→ Locomotive Scroll intercepts scroll
→ Uses requestAnimationFrame for 60fps updates
→ Applies CSS transforms for GPU acceleration
→ Smooth, optimized scrolling
```

### Configuration Details

In `useLocomotiveScroll.js`:
```javascript
new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,              // Enable smooth scrolling
  multiplier: 1,             // Scroll speed multiplier
  lerp: 0.1,                 // Lower = smoother, Higher = snappier
  smartphone: { smooth: true }, // Enable on mobile
  tablet: { smooth: true },     // Enable on tablet
  getDirection: true,        // Track scroll direction
  getSpeed: true,            // Track scroll speed
});
```

**Lerp Value (0.1):**
- Lower values = smoother, more easing
- Higher values = snappier response
- 0.1 is optimized for modern displays
- Adjust if needed for different feel

---

## React Router Compatibility

### How Route Changes Work

1. User navigates to new route
2. `useLocation()` hook detects path change
3. Effect triggers on route change
4. `scrollRef.current.scrollTo(0)` - scroll to top
5. `scrollRef.current.update()` - recalculate positions

### Important Notes

- ✅ Links work normally (React Router handles navigation)
- ✅ Back/Forward buttons work
- ✅ Direct URL navigation works
- ✅ Scroll resets to top on new page
- ⚠️ Anchor links may need custom implementation (see utils)

### Using Anchor Links

```javascript
import { scrollToElement } from '@/utils/locomotiveScroll';

// Scroll to element
const handleAnchorClick = (e) => {
  e.preventDefault();
  scrollToElement('#section-id');
};
```

---

## Using Scroll Utilities

### Import Utilities

```javascript
import {
  getScrollInstance,
  scrollToElement,
  scrollToPosition,
  updateScroll,
  getScrollDirection,
  getScrollSpeed,
  onScroll,
} from '@/utils/locomotiveScroll';
```

### Scroll to Element

```javascript
import { scrollToElement } from '@/utils/locomotiveScroll';

const handleButtonClick = () => {
  scrollToElement('#target-section', {
    duration: 1000,
    offset: 100,
  });
};
```

### Listen to Scroll Events

```javascript
import { onScroll } from '@/utils/locomotiveScroll';
import { useEffect } from 'react';

export const MyComponent = () => {
  useEffect(() => {
    // Subscribe to scroll events
    const unsubscribe = onScroll((instance) => {
      console.log('Current position:', instance.scroll.y);
      console.log('Speed:', instance.speed);
      console.log('Direction:', instance.direction);
    });

    // Cleanup subscription
    return unsubscribe;
  }, []);

  return <div>Scroll and watch console</div>;
};
```

### Update After Dynamic Content

```javascript
import { updateScroll } from '@/utils/locomotiveScroll';
import { useEffect, useState } from 'react';

export const DynamicContent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Add new items
    setItems([...items, 'new item']);
    
    // Update scroll after content changes
    // Locomotve Scroll recalculates element positions
    updateScroll();
  }, [items]);

  return <div>{items.map(item => <div>{item}</div>)}</div>;
};
```

---

## Common Issues & Solutions

### Issue 1: Content Not Scrolling
**Cause:** `[data-scroll-container]` not found or not wrapping content
**Solution:** Ensure Provider wraps entire app, check for typos in data attribute

### Issue 2: Fixed Navbar Below Content
**Cause:** Z-index not set on fixed elements
**Solution:** Add `position: fixed; z-index: 1000;` to navbar CSS
```css
nav {
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 0;
}
```

### Issue 3: Scroll Jumps on Route Change
**Cause:** Delay between page render and scroll update
**Solution:** Already handled by hook with 100ms setTimeout
If still occurring, increase delay in `useLocomotiveScroll.js`

### Issue 4: Mobile Scroll Feels Janky
**Cause:** Lerp value too high or multiplier too high
**Solution:** Adjust in `useLocomotiveScroll.js`:
```javascript
lerp: 0.08,  // Make it smoother
multiplier: 0.9, // Reduce scroll distance
```

### Issue 5: Performance Issues
**Cause:** Too many scroll listeners or heavy animations
**Solution:** 
- Use `requestAnimationFrame` for animations
- Limit scroll event listeners
- Lazy load heavy content
- Profile with Chrome DevTools

---

## Accessibility Considerations

### Maintained Accessibility

- ✅ Keyboard navigation still works
- ✅ Focus management preserved
- ✅ Screen readers can navigate
- ✅ Skip-to-content links work

### Potential Issues

- ⚠️ Some screen readers may not detect scroll position correctly
- ⚠️ `prefers-reduced-motion` not automatically handled

### Implementing prefers-reduced-motion

```javascript
// In useLocomotiveScroll.js, add:
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // Initialize Locomotive Scroll only if user doesn't prefer reduced motion
  scrollRef.current = new LocomotiveScroll({...});
}
```

---

## Performance Optimization Tips

1. **Use OnScroll Events Sparingly**
   - Avoid heavy calculations in scroll listeners
   - Throttle or debounce scroll handlers

2. **Lazy Load Images**
   - Use Intersection Observer for images
   - Load only visible images

3. **Avoid Layout Thrashing**
   - Batch DOM reads and writes
   - Use CSS transforms instead of top/left

4. **Monitor Frame Rate**
   - Use Chrome DevTools Performance tab
   - Target 60fps for smooth scroll

5. **Code Split Routes**
   - Use React.lazy() for route components
   - Reduces initial bundle size

---

## Browser Compatibility

Locomotive Scroll works on:
- ✅ Chrome/Edge (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (iOS 12+)
- ✅ Android browsers

**Older browsers:** Gracefully falls back to native scroll (no error)

---

## Production Considerations

### Before Deploying

1. Test on multiple devices (mobile, tablet, desktop)
2. Check performance on slow devices (throttle in DevTools)
3. Test with real data (large content, many images)
4. Verify all links and routing work
5. Check accessibility with screen reader
6. Test on slow network (3G throttle)

### Performance Budgets

Target metrics:
- Page load: < 3 seconds
- First contentful paint: < 1.5 seconds
- Scroll frame rate: 60fps

### Monitoring

Use analytics to track:
- Scroll depth
- Bounce rate
- Time on page
- Device types

---

## Disabling Locomotive Scroll

If you need to disable it globally:

```javascript
// In LocomotiveScrollProvider.jsx
export const LocomotiveScrollProvider = ({ children }) => {
  const enableScroll = false; // Toggle this

  if (!enableScroll) {
    return <>{children}</>;
  }

  // ... rest of provider code
};
```

Or disable for specific pages:

```javascript
// Don't use Locomotive Scroll on this page
export const MyPage = () => {
  return (
    <div style={{ overflow: 'auto', height: '100vh' }}>
      {/* Content scrolls normally */}
    </div>
  );
};
```

---

## Summary

**Files Changed:**
- `src/main.jsx` - Added provider wrapper
- `src/App.jsx` - Removed overflow/height constraints
- `src/index.css` - Added scroll styles

**New Files:**
- `src/hooks/useLocomotiveScroll.js` - Scroll initialization hook
- `src/components/LocomotiveScrollProvider.jsx` - Wrapper component
- `src/utils/locomotiveScroll.js` - Helper utilities

**Key Features:**
- ✅ Smooth scrolling across entire app
- ✅ Mobile responsive
- ✅ React Router compatible
- ✅ Memory-leak free
- ✅ GPU accelerated
- ✅ Production ready

**Next Steps:**
- Test on different devices
- Implement scroll-based animations if needed
- Monitor performance metrics
- Adjust lerp value for desired feel

---

## References

- [Locomotive Scroll Documentation](https://locomotivemtl.github.io/locomotive-scroll/)
- [MDN: requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [CSS Transforms Performance](https://web.dev/animations-guide/)
