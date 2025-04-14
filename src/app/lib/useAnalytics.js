import { useEffect, useState } from 'react';
import { analytics, initializeAnalytics } from './firebase';
import { logEvent } from 'firebase/analytics';

/**
 * Custom hook for using Google Analytics in components
 */
export function useAnalytics() {
  const [analyticsInstance, setAnalyticsInstance] = useState(analytics);

  useEffect(() => {
    // Initialize analytics if it hasn't been initialized yet
    if (!analyticsInstance) {
      const init = async () => {
        const instance = await initializeAnalytics();
        setAnalyticsInstance(instance);
      };
      init();
    }
  }, [analyticsInstance]);

  /**
   * Log an event to Google Analytics
   * @param {string} eventName - The name of the event to log
   * @param {Object} eventParams - The parameters to send with the event
   */
  const trackEvent = (eventName, eventParams = {}) => {
    if (analyticsInstance) {
      logEvent(analyticsInstance, eventName, eventParams);
    } else {
      console.warn('Analytics not initialized yet');
    }
  };

  /**
   * Track a page view
   * @param {string} pageTitle - The title of the page
   * @param {string} pagePath - The path of the page
   */
  const trackPageView = (pageTitle, pagePath) => {
    trackEvent('page_view', {
      page_title: pageTitle,
      page_path: pagePath,
    });
  };

  return {
    trackEvent,
    trackPageView,
  };
} 