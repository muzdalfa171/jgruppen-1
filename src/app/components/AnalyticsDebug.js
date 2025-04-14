'use client';

import { useEffect, useState } from 'react';

/**
 * This component is for debugging analytics configuration.
 * Remove in production!
 */
export default function AnalyticsDebug() {
  const [debugInfo, setDebugInfo] = useState({
    gaIdLoaded: false,
    gaIdValue: 'Not loaded'
  });

  useEffect(() => {
    // Check if the GA Measurement ID is loaded
    const gaId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;
    
    setDebugInfo({
      gaIdLoaded: !!gaId,
      gaIdValue: gaId ? `${gaId.substring(0, 2)}...` : 'Not loaded' // Only show first two characters for security
    });
  }, []);

  if (process.env.NODE_ENV === 'production') {
    return null; // Don't render anything in production
  }

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '10px', 
      right: '10px', 
      padding: '10px', 
      background: '#f0f0f0', 
      border: '1px solid #ccc',
      zIndex: 9999,
      fontSize: '12px'
    }}>
      <h4>Analytics Debug (DEV ONLY)</h4>
      <ul>
        <li>GA ID Loaded: {debugInfo.gaIdLoaded ? '✅' : '❌'}</li>
        <li>GA ID Value: {debugInfo.gaIdValue}</li>
      </ul>
    </div>
  );
} 