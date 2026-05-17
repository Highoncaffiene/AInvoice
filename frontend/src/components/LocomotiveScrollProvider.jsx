import React, { useEffect } from 'react';
import useLocomotiveScroll from '../hooks/useLocomotiveScroll';

/**
 * LocomotiveScrollProvider Component
 * 
 * Wraps the entire app with Locomotive Scroll functionality
 * 
 * This component:
 * - Initializes Locomotive Scroll globally
 * - Provides the data-scroll-container attribute to the wrapper
 * - Handles resize events and dynamic content
 * - Ensures all child routes benefit from smooth scrolling
 * 
 * Usage: Wrap your entire app with this provider in main.jsx
 * <LocomotiveScrollProvider>
 *   <App />
 * </LocomotiveScrollProvider>
 */
const LocomotiveScrollProvider = ({ children }) => {
  // Initialize Locomotive Scroll using custom hook
  useLocomotiveScroll();

  // Handle window resize events
  // When window resizes, Locomotive Scroll needs to recalculate
  useEffect(() => {
    const handleResize = () => {
      // Dispatch custom event that Locomotive Scroll might listen to
      window.dispatchEvent(new Event('resize'));
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* 
        data-scroll-container is the key attribute that tells 
        Locomotive Scroll which element to track as the scroll container.
        All scrollable content must be inside this div.
      */}
      <div data-scroll-container className="scroll-container w-full">
        {children}
      </div>
    </>
  );
};

export default LocomotiveScrollProvider;
