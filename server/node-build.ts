import path from "path";
import { createServer } from "./index";
import * as express from "express";

const app = createServer();
const port = process.env.PORT || 3000;

// In production, serve the built SPA files
const __dirname = import.meta.dirname;
const distPath = path.join(__dirname, "../spa");

// Serve static files with caching headers
app.use(express.static(distPath, {
  maxAge: process.env.NODE_ENV === 'production' ? '1y' : '0',
  etag: true,
  lastModified: true,
  setHeaders: (res, path) => {
    // Aggressive caching for SVGs (large files)
    if (path.endsWith('.svg')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
    // Cache images, fonts, and other static assets
    else if (path.match(/\.(png|jpg|jpeg|webp|gif|ico|woff|woff2|ttf|eot|otf|mp3|m4a|ogg|wav)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
    // Cache JS and CSS (they're hashed in production)
    else if (path.match(/\.(js|css)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
    // Short cache for HTML
    else if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=300');
    }
  }
}));

// Handle React Router - serve index.html for all non-API routes
// Use a more specific pattern to avoid path-to-regexp errors
app.get(/^(?!\/api|\/health).*$/, (req, res) => {
  // Don't serve index.html for API routes (double check)
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }

  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
