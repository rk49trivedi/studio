/**
 * SVG Loader Utility
 * Loads SVG files and returns their content as a string for inlining
 */

// Cache for loaded SVGs
const svgCache = new Map<string, string>();

/**
 * Loads an SVG file and returns its content as a string
 * @param path - Path to the SVG file (e.g., '/logo.svg')
 * @returns Promise that resolves to the SVG content string
 */
export async function loadSVG(path: string): Promise<string> {
  // Check cache first
  if (svgCache.has(path)) {
    return svgCache.get(path)!;
  }

  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load SVG: ${response.statusText}`);
    }
    const svgContent = await response.text();
    svgCache.set(path, svgContent);
    return svgContent;
  } catch (error) {
    console.error(`Error loading SVG from ${path}:`, error);
    throw error;
  }
}

/**
 * Preloads critical SVGs for faster rendering
 * Call this early in the app lifecycle
 */
export async function preloadCriticalSVGs(paths: string[]): Promise<void> {
  await Promise.all(paths.map(path => loadSVG(path).catch(err => {
    console.warn(`Failed to preload SVG: ${path}`, err);
  })));
}

/**
 * Gets SVG content from cache or returns null
 */
export function getCachedSVG(path: string): string | null {
  return svgCache.get(path) || null;
}
