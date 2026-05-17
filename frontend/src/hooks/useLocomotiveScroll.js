import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook for Locomotive Scroll v5 integration with React
 * 
 * Locomotive Scroll v5 is built on Lenis for smooth scrolling
 * Features:
 * - Smooth scroll with parallax support
 * - Viewport detection with Intersection Observer
 * - Smooth wheel and touch handling
 * - TypeScript first with full type support
 */
export const useLocomotiveScroll = () => {
  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Initialize Locomotive Scroll v5
    // Small delay to ensure DOM is fully ready
    const initTimer = setTimeout(() => {
      try {
        // Create Locomotive Scroll instance with v5 API
        scrollRef.current = new LocomotiveScroll({
          lenisOptions: {
            // Default: full-page scrolling using window
            // For custom scroll containers, set wrapper and content
            wrapper: window,
            content: document.documentElement,
            
            // Smooth scrolling parameters
            lerp: 0.1,           // Linear interpolation (0-1, lower = smoother)
            duration: 1.2,       // Duration of scroll animation in seconds
            
            // Wheel scrolling
            smoothWheel: true,   // Enable smooth scrolling for mouse wheel
            wheelMultiplier: 1,  // Multiplier for wheel scroll speed
            normalizeWheel: true, // Normalize wheel inputs across browsers
            
            // Touch scrolling
            smoothTouch: false,  // Disable smooth touch (native is better on mobile)
            touchMultiplier: 2,  // Multiplier for touch scroll speed
            
            // Orientation
            orientation: 'vertical',
            gestureOrientation: 'vertical'
          },
          
          // Intersection Observer margins for triggering
          triggerRootMargin: '-1px -1px -1px -1px',
          rafRootMargin: '100% 100% 100% 100%',
          
          // Auto-start the RAF loop
          autoStart: true,
          
          // Scroll callback for real-time scroll data
          scrollCallback: ({ scroll, limit, velocity, direction, progress }) => {
            // Can be used for tracking scroll position in custom logic
            // Dispatching custom event for components that need it
            window.dispatchEvent(new CustomEvent('locomotiveScroll', {
              detail: { scroll, limit, velocity, direction, progress }
            }));
          }
        });

        // Store instance globally for utility functions to access
        window.__locomotiveScrollInstance = scrollRef.current;

        console.log('✅ Locomotive Scroll v5 initialized successfully');
      } catch (error) {
        console.warn(
          '⚠️ Locomotive Scroll initialization error:',
          error.message
        );
      }
    }, 100); // Delay for DOM readiness

    // Cleanup function to prevent memory leaks on unmount
    return () => {
      clearTimeout(initTimer);
      if (scrollRef.current) {
        try {
          // Destroy the Locomotive Scroll instance
          scrollRef.current.destroy();
          scrollRef.current = null;
          window.__locomotiveScrollInstance = null;
          console.log('🧹 Locomotive Scroll cleaned up');
        } catch (error) {
          console.warn('⚠️ Error destroying scroll:', error);
        }
      }
    };
  }, []); // Only initialize once on mount

  // Handle route changes - reset scroll on navigation
  useEffect(() => {
    if (scrollRef.current) {
      try {
        // Scroll to top on route change
        scrollRef.current.scrollTo(0, { duration: 0 }); // Instant scroll to top
      } catch (error) {
        console.warn('⚠️ Error scrolling on route change:', error);
      }
    }
  }, [location.pathname]); // Re-run when route changes

  return scrollRef;
};

export default useLocomotiveScroll;
