import { useEffect, useState, useRef } from 'react';

interface InlineSVGProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  fetchpriority?: 'high' | 'low' | 'auto';
  loading?: 'lazy' | 'eager';
  [key: string]: any; // Allow other props to pass through
}

/**
 * InlineSVG component that renders SVG content directly in the DOM
 * Also handles PNG/JPG images by using regular img tag for better performance
 * This eliminates the need for separate HTTP requests and improves performance
 * 
 * Usage:
 * <InlineSVG src="/logo.svg" alt="Logo" className="w-20 h-20" />
 * <InlineSVG src="/image.png" alt="Image" className="w-20 h-20" />
 * 
 * For critical SVGs, import them directly:
 * import logoSvg from '/logo.svg?inline'
 * <InlineSVG svgContent={logoSvg} alt="Logo" className="w-20 h-20" />
 */
export default function InlineSVG({ 
  src,
  svgContent,
  alt,
  className = '',
  width,
  height,
  fetchpriority,
  loading = 'lazy',
  style,
  ...props
}: InlineSVGProps & { svgContent?: string; style?: React.CSSProperties }) {
  const [inlineContent, setInlineContent] = useState<string | null>(svgContent || null);
  const [isLoading, setIsLoading] = useState(!svgContent);
  const containerRef = useRef<HTMLDivElement>(null);
  const fetchedRef = useRef(false);

  // Check if the file is a raster image (PNG, JPG, etc.) - use regular img tag directly
  const isRasterImage = src && /\.(png|jpg|jpeg|gif|webp|bmp)$/i.test(src);

  // Fetch SVG content (skip for raster images)
  useEffect(() => {
    // If it's a raster image, skip SVG processing
    if (isRasterImage) {
      setIsLoading(false);
      return;
    }

    // If SVG content is provided directly, use it
    if (svgContent) {
      setInlineContent(svgContent);
      setIsLoading(false);
      fetchedRef.current = true;
      return;
    }

    if (!src || fetchedRef.current || inlineContent) return;

    // For eager loading, fetch immediately
    if (loading === 'eager') {
      fetchedRef.current = true;
      fetch(src)
        .then(res => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.text();
        })
        .then(content => {
          setInlineContent(content);
          setIsLoading(false);
        })
        .catch(err => {
          console.error(`Failed to load SVG: ${src}`, err);
          setIsLoading(false);
          fetchedRef.current = false; // Allow retry on error
        });
    } else if (loading === 'lazy' && containerRef.current) {
      // For lazy loading, use Intersection Observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !fetchedRef.current) {
              fetchedRef.current = true;
              fetch(src)
                .then(res => {
                  if (!res.ok) throw new Error(`HTTP ${res.status}`);
                  return res.text();
                })
                .then(content => {
                  setInlineContent(content);
                  setIsLoading(false);
                })
                .catch(err => {
                  console.error(`Failed to load SVG: ${src}`, err);
                  setIsLoading(false);
                  fetchedRef.current = false; // Allow retry on error
                });
              observer.disconnect();
            }
          });
        },
        { rootMargin: '50px' }
      );

      observer.observe(containerRef.current);

      return () => observer.disconnect();
    }
  }, [src, svgContent, loading, isRasterImage]);

  // For raster images (PNG, JPG, etc.), use regular img tag directly
  if (isRasterImage) {
    return (
      <div ref={containerRef} style={{ display: 'inline-block', width, height, ...style }}>
        <img
          src={src}
          alt={alt}
          className={className}
          width={width}
          height={height}
          fetchpriority={fetchpriority}
          loading={loading}
          decoding="async"
          {...props}
        />
      </div>
    );
  }

  // If we have inline content, render it directly
  if (inlineContent) {
    // Parse and modify SVG to add className and preserve other attributes
    try {
      // Create a temporary div to parse the SVG
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = inlineContent.trim();
      const svgElement = tempDiv.querySelector('svg');
      
      if (svgElement) {
        // Add className if provided
        if (className) {
          svgElement.classList.add(...className.split(' ').filter(Boolean));
        }
        
        // Add width/height if provided
        if (width) svgElement.setAttribute('width', String(width));
        if (height) svgElement.setAttribute('height', String(height));
        
        // Preserve viewBox if not set
        if (!svgElement.getAttribute('viewBox') && width && height) {
          svgElement.setAttribute('viewBox', `0 0 ${width} ${height}`);
        }
        
        // Add other props as attributes (filter out React-specific ones)
        Object.entries(props).forEach(([key, value]) => {
          if (!['src', 'alt', 'fetchpriority', 'loading', 'decoding', 'onClick', 'onMouseEnter', 'onMouseLeave'].includes(key)) {
            svgElement.setAttribute(key, String(value));
          }
        });
        
        const modifiedContent = tempDiv.innerHTML;
        
        return (
          <div 
            ref={containerRef}
            className={className}
            style={{ 
              display: 'inline-block',
              width: width || '100%',
              height: height || 'auto',
              ...style 
            }}
            dangerouslySetInnerHTML={{ __html: modifiedContent }}
            aria-label={alt}
            {...Object.fromEntries(
              Object.entries(props).filter(([key]) => 
                ['onClick', 'onMouseEnter', 'onMouseLeave'].includes(key)
              )
            )}
          />
        );
      }
    } catch (error) {
      console.error('Error parsing SVG:', error);
    }
  }

  // Fallback to regular img tag while loading or if fetch fails
  return (
    <div ref={containerRef} style={{ display: 'inline-block', width, height, ...style }}>
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        fetchpriority={fetchpriority}
        loading={loading}
        decoding="async"
        {...props}
      />
    </div>
  );
}
