import { useState, useEffect } from 'react';

export const useCacheManager = () => {
  const [cacheStatus, setCacheStatus] = useState({
    isSupported: false,
    cacheSize: 0,
    lastUpdated: null
  });

  useEffect(() => {
    checkCacheSupport();
  }, []);

  const checkCacheSupport = async () => {
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        const cacheSize = await getCacheSize();
        setCacheStatus({
          isSupported: true,
          cacheSize,
          lastUpdated: new Date()
        });
      } catch (error) {
        console.warn('Cache API error:', error);
      }
    }
  };

  const getCacheSize = async () => {
    try {
      const cacheNames = await caches.keys();
      let totalSize = 0;
      
      for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const requests = await cache.keys();
        totalSize += requests.length;
      }
      
      return totalSize;
    } catch (error) {
      console.warn('Error calculating cache size:', error);
      return 0;
    }
  };

  const clearCache = async (cacheName = null) => {
    try {
      if (cacheName) {
        await caches.delete(cacheName);
      } else {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(name => caches.delete(name))
        );
      }
      
      // Refresh cache status
      await checkCacheSupport();
      
      return true;
    } catch (error) {
      console.error('Error clearing cache:', error);
      return false;
    }
  };

  const preloadAssets = async (assets) => {
    if (!('caches' in window)) return false;

    try {
      const cache = await caches.open('hacktober-preload');
      await cache.addAll(assets);
      return true;
    } catch (error) {
      console.error('Error preloading assets:', error);
      return false;
    }
  };

  return {
    cacheStatus,
    clearCache,
    preloadAssets,
    refreshStatus: checkCacheSupport
  };
};