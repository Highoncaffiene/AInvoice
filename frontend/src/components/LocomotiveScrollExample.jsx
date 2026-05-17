/**
 * Example Component: Using Locomotive Scroll Utilities
 * 
 * This file shows practical examples of using Locomotive Scroll
 * in React components. Copy patterns from here into your own components.
 * 
 * File: src/components/LocomotiveScrollExample.jsx
 * (This is for reference - can be deleted after understanding)
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  scrollToElement,
  scrollToPosition,
  updateScroll,
  onScroll,
  getScrollDirection,
  getScrollSpeed,
  getScrollPosition,
} from '../utils/locomotiveScroll';

/**
 * Example 1: Scroll to Element Button
 * Shows how to scroll to a specific element when button is clicked
 */
const ScrollToElementExample = () => {
  const handleScrollToSection = () => {
    // Scroll to element with smooth animation
    scrollToElement('#target-section', {
      duration: 1000, // Animation duration in ms
      offset: 100,    // Offset from element (useful for fixed navbar)
    });
  };

  return (
    <div>
      <button onClick={handleScrollToSection} className="px-4 py-2 bg-accent text-white rounded">
        Scroll to Section
      </button>

      {/* This is the target element */}
      <div id="target-section" className="mt-screen h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl ">You scrolled here!</h2>
      </div>
    </div>
  );
};

/**
 * Example 2: Monitor Scroll Position
 * Shows how to track scroll position in real-time
 */
const ScrollPositionMonitor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState('none');
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    // Subscribe to scroll events
    const unsubscribe = onScroll((instance) => {
      // Update position
      if (instance.scroll) {
        setPosition({
          x: Math.round(instance.scroll.x),
          y: Math.round(instance.scroll.y),
        });
      }

      // Update scroll direction
      setDirection(instance.direction || 'none');

      // Update scroll speed
      setSpeed(Math.round(instance.speed || 0));
    });

    // Cleanup subscription when component unmounts
    return unsubscribe;
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded text-sm font-mono z-50">
      <div>Position: X: {position.x}px, Y: {position.y}px</div>
      <div>Direction: {direction}</div>
      <div>Speed: {speed}px/ms</div>
    </div>
  );
};

/**
 * Example 3: Dynamic Content Update
 * Shows how to update Locomotive Scroll when adding dynamic content
 */
const DynamicContentExample = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const contentRef = useRef(null);

  const handleAddItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);

    // After state update, useEffect will handle the update
  };

  useEffect(() => {
    // Call updateScroll after content changes
    // Small timeout ensures DOM has updated first
    const timer = setTimeout(() => {
      updateScroll();
    }, 0);

    return () => clearTimeout(timer);
  }, [items]); // Re-run when items change

  return (
    <div ref={contentRef}>
      <button onClick={handleAddItem} className="px-4 py-2 bg-accent text-white rounded mb-4">
        Add Item (Scroll will update)
      </button>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="h-40 bg-gray-100 flex items-center justify-center">
            <h3 className="text-xl ">{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Example 4: Show/Hide Header on Scroll
 * Shows how to use scroll direction to show/hide elements
 */
const HeaderAutoHide = () => {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const unsubscribe = onScroll((instance) => {
      if (!instance.scroll) return;

      const currentScrollY = instance.scroll.y;
      const direction = instance.direction;

      // Show header when scrolling up, hide when scrolling down
      if (direction === 'up') {
        setHeaderVisible(true);
      } else if (direction === 'down' && currentScrollY > 100) {
        setHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    });

    return unsubscribe;
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white shadow-lg p-4 transition-transform duration-300 z-50 ${
        headerVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <h1 className="text-2xl ">My App</h1>
      <p className="text-gray-500">Scroll down to hide, up to show</p>
    </header>
  );
};

/**
 * Example 5: Parallax Effect
 * Shows how to create parallax scrolling with Locomotive Scroll
 */
const ParallaxExample = () => {
  const elementRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const unsubscribe = onScroll((instance) => {
      if (instance.scroll) {
        setScrollY(instance.scroll.y);
      }
    });

    return unsubscribe;
  }, []);

  // Create parallax offset
  const parallaxOffset = scrollY * 0.5; // 50% of scroll speed

  return (
    <div
      ref={elementRef}
      className="h-screen bg-gradient-to-b from-gray-100 to-accent flex items-center justify-center overflow-hidden"
      style={{
        transform: `translateY(${parallaxOffset}px)`,
      }}
    >
      <h2 className="text-5xl text-white">Parallax Effect</h2>
    </div>
  );
};

/**
 * Example 6: Scroll-triggered Animation
 * Shows how to trigger animations based on scroll position
 */
const ScrollTriggerExample = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = (instance) => {
      if (!elementRef.current || !instance.scroll) return;

      const elementPosition = elementRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollTop = instance.scroll.y;

      // Check if element is in viewport
      if (scrollTop + windowHeight > elementPosition) {
        setIsVisible(true);
      }
    };

    const unsubscribe = onScroll(handleScroll);
    return unsubscribe;
  }, []);

  return (
    <div ref={elementRef} className={`h-64 flex items-center justify-center transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center">
        <h3 className="text-3xl ">This appears when scrolled into view!</h3>
        <p className="text-gray-500">Animation triggered by scroll position</p>
      </div>
    </div>
  );
};

/**
 * Example 7: Scroll Progress Bar
 * Shows a progress bar of scroll position
 */
const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = onScroll((instance) => {
      if (!instance.scroll) return;

      // Calculate progress as percentage
      // (assuming total scroll height is document height)
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (instance.scroll.y / scrollHeight) * 100;
      setProgress(Math.min(scrolled, 100));
    });

    return unsubscribe;
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-accent transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

/**
 * Example 8: Smooth Scroll to Top Button
 * Shows how to create a "scroll to top" button
 */
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = onScroll((instance) => {
      // Show button when scrolled down more than 300px
      if (instance.scroll && instance.scroll.y > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    return unsubscribe;
  }, []);

  const handleScrollToTop = () => {
    scrollToPosition(0, { duration: 1000 });
  };

  return (
    isVisible && (
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-6 right-6 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-accent transition-colors z-50"
        title="Scroll to top"
      >
        ↑
      </button>
    )
  );
};

/**
 * Combined Example Component
 * Shows all examples together
 */
export const LocomotiveScrollExamples = () => {
  return (
    <div className="w-full">
      {/* Fixed monitors and controls */}
      <ScrollProgressBar />
      <ScrollPositionMonitor />
      <ScrollToTopButton />
      <HeaderAutoHide />

      {/* Main content with examples */}
      <div className="pt-20">
        <ParallaxExample />
        <ScrollToElementExample />
        <DynamicContentExample />
        <ScrollTriggerExample />
      </div>
    </div>
  );
};

/**
 * Usage in your app:
 * 
 * 1. Copy individual examples into your components
 * 2. Import required utilities from @/utils/locomotiveScroll
 * 3. Adapt the code to your needs
 * 
 * Common patterns:
 * - Use onScroll() to monitor scroll events
 * - Use scrollToElement() for anchor navigation
 * - Use updateScroll() after adding dynamic content
 * - Use ref checking in useEffect cleanup
 * 
 * Performance tips:
 * - Throttle scroll listeners with debounce
 * - Use requestAnimationFrame for animations
 * - Lazy load images to reduce reflow
 */

export default {
  ScrollToElementExample,
  ScrollPositionMonitor,
  DynamicContentExample,
  HeaderAutoHide,
  ParallaxExample,
  ScrollTriggerExample,
  ScrollProgressBar,
  ScrollToTopButton,
  LocomotiveScrollExamples,
};
