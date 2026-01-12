import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleSubscribe } from "./routes/subscribe";

// Load .env file from project root
// Get the directory of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Resolve .env path relative to server directory (go up one level to project root)
const envPath = path.resolve(__dirname, "../.env");
const result = dotenv.config({ path: envPath });

if (result.error) {
  console.warn("Warning: Could not load .env file:", result.error.message);
  console.log("Looking for .env at:", envPath);
} else {
  console.log("✓ .env file loaded successfully from:", envPath);
}

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Newsletter subscription route
  app.post("/api/subscribe", handleSubscribe);

  // Debug endpoint to check environment variables (remove in production)
  app.get("/api/debug-env", (_req, res) => {
    const password = process.env.SMTP_PASSWORD || "";
    const hasQuotes = password.startsWith('"') || password.startsWith("'");
    
    res.json({
      SMTP_HOST: process.env.SMTP_HOST || "✗ Missing",
      SMTP_PORT: process.env.SMTP_PORT || "✗ Missing",
      SMTP_USER: process.env.SMTP_USER || "✗ Missing",
      SMTP_PASSWORD: password ? (hasQuotes ? "⚠ Set (has quotes - will be stripped)" : "✓ Set") : "✗ Missing",
      OWNER_EMAIL: process.env.OWNER_EMAIL || "✗ Missing",
      SITE_NAME: process.env.SITE_NAME || "✗ Missing",
      NODE_ENV: process.env.NODE_ENV,
      NOTE: hasQuotes ? "Remove quotes from SMTP_PASSWORD in .env file" : "All good!",
    });
  });

  return app;
}
