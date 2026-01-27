import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
    emptyOutDir: true,
    // Optimize build for production
    minify: "esbuild", // Use esbuild (faster, built-in) instead of terser
    // Code splitting and chunking for better caching and faster initial load
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separate vendor chunks for better caching and parallel loading
          if (id.includes('node_modules')) {
            // React core - load first (critical)
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            // Framer Motion - load early (used in hero)
            if (id.includes('framer-motion')) {
              return 'animation-vendor';
            }
            // UI libraries - can load later
            if (id.includes('@radix-ui') || id.includes('lucide-react')) {
              return 'ui-vendor';
            }
            // Three.js - load last (heavy, below fold)
            if (id.includes('three') || id.includes('@react-three')) {
              return 'three-vendor';
            }
            // Other vendors
            return 'vendor';
          }
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // Optimize asset file names and paths
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    // Increase chunk size warning limit (for large SVGs)
    chunkSizeWarningLimit: 1000,
    // Enable source maps for debugging (disable in production for smaller builds)
    sourcemap: false,
    // Optimize chunk loading
    chunkLoadingStrategy: 'import', // Use dynamic imports for better code splitting
    // Target modern browsers for smaller bundles
    target: 'esnext',
    // CSS code splitting
    cssCodeSplit: true,
    // Report compressed size (helps identify large chunks)
    reportCompressedSize: true,
  },
  publicDir: "public",
  plugins: [react(), expressPlugin(), svgInlinePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();

      // Add Express app as middleware to Vite dev server
      server.middlewares.use(app);
    },
  };
}

/**
 * Vite plugin to inline SVG files as React components
 * Usage: import logoSvg from '/logo.svg?inline'
 */
function svgInlinePlugin(): Plugin {
  return {
    name: 'svg-inline',
    enforce: 'pre',
    resolveId(id) {
      if (id.endsWith('.svg?inline')) {
        return id;
      }
      return null;
    },
    load(id) {
      if (id.endsWith('.svg?inline')) {
        const filePath = id.replace('?inline', '');
        // Handle both /public paths and relative paths
        let fullPath: string;
        if (filePath.startsWith('/')) {
          // Public path
          fullPath = path.resolve(process.cwd(), 'public', filePath.slice(1));
        } else {
          // Relative path
          fullPath = path.resolve(process.cwd(), filePath);
        }
        
        if (fs.existsSync(fullPath)) {
          const svgContent = fs.readFileSync(fullPath, 'utf-8');
          // Return as a module that exports the SVG content as a string
          return `export default ${JSON.stringify(svgContent)};`;
        } else {
          console.warn(`SVG not found: ${fullPath}`);
        }
      }
      return null;
    },
  };
}
