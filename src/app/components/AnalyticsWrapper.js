'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useAnalytics } from '../lib/useAnalytics';

/**
 * Component that wraps the app and tracks page views automatically
 */
export default function AnalyticsWrapper({ children }) {
  const { trackPageView } = useAnalytics();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views when the route changes
  useEffect(() => {
    if (pathname) {
      // Wait for the path to be available and then track the page view
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      
      // Extract page title from the document when it's available
      const pageTitle = document.title || pathname.split('/').pop() || 'Home';
      
      // Track the page view
      trackPageView(pageTitle, url);
    }
  }, [pathname, searchParams, trackPageView]);

  return children;
} 