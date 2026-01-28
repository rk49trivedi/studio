import { useEffect } from 'react';

/**
 * Hook to preload critical SVG files for faster rendering
 * Call this early in your app lifecycle (e.g., in App.tsx or Index.tsx)
 * 
 * @param svgPaths - Array of SVG paths to preload
 */
export function usePreloadSVGs(svgPaths: string[]) {
  useEffect(() => {
    // Preload critical SVGs by creating link elements
    svgPaths.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = path;
      link.type = 'image/svg+xml';
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    });

    // Cleanup function to remove preload links when component unmounts
    return () => {
      svgPaths.forEach(path => {
        const links = document.querySelectorAll(`link[href="${path}"]`);
        links.forEach(link => link.remove());
      });
    };
  }, [svgPaths]);
}

/**
 * Hook to preload critical image files (PNG, JPG, WebP, etc.) for faster rendering
 * Call this early in your app lifecycle (e.g., in App.tsx or Index.tsx)
 * 
 * @param imagePaths - Array of image paths to preload (PNG, JPG, WebP, etc.)
 */
export function usePreloadImages(imagePaths: string[]) {
  useEffect(() => {
    // Preload critical images by creating link elements
    imagePaths.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = path;
      
      // Detect file type and set correct MIME type
      if (/\.png$/i.test(path)) {
        link.type = 'image/png';
      } else if (/\.(jpg|jpeg)$/i.test(path)) {
        link.type = 'image/jpeg';
      } else if (/\.webp$/i.test(path)) {
        link.type = 'image/webp';
      } else {
        link.type = 'image'; // Generic fallback
      }
      
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    });

    // Cleanup function to remove preload links when component unmounts
    return () => {
      imagePaths.forEach(path => {
        const links = document.querySelectorAll(`link[href="${path}"]`);
        links.forEach(link => link.remove());
      });
    };
  }, [imagePaths]);
}

/**
 * Preload critical SVGs immediately (not as a hook)
 * Use this for SVGs that need to be available before React renders
 */
export function preloadCriticalSVGs(svgPaths: string[]) {
  if (typeof document !== 'undefined') {
    svgPaths.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = path;
      link.type = 'image/svg+xml';
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    });
  }
}

/**
 * Preload critical images immediately (not as a hook)
 * Use this for images that need to be available before React renders
 */
export function preloadCriticalImages(imagePaths: string[]) {
  if (typeof document !== 'undefined') {
    imagePaths.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = path;
      
      // Detect file type and set correct MIME type
      if (/\.png$/i.test(path)) {
        link.type = 'image/png';
      } else if (/\.(jpg|jpeg)$/i.test(path)) {
        link.type = 'image/jpeg';
      } else if (/\.webp$/i.test(path)) {
        link.type = 'image/webp';
      } else {
        link.type = 'image'; // Generic fallback
      }
      
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    });
  }
}
