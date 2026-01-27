# PowerShell Deployment Script for SpanishLingo Studios - Bluehost VPS (aapanel)
# This script builds and deploys the application on Windows Server

$ErrorActionPreference = "Stop"

Write-Host "🚀 Starting deployment for SpanishLingo Studios..." -ForegroundColor Cyan

# Configuration
$PROJECT_DIR = "C:\www\wwwroot\spanishlingo-studios.com"
$NODE_VERSION = "20"

# Check if Node.js version is correct
Write-Host "Checking Node.js version..." -ForegroundColor Yellow
$NODE_CURRENT = (node -v).Substring(1).Split('.')[0]
if ($NODE_CURRENT -ne $NODE_VERSION) {
    Write-Host "Error: Node.js version $NODE_VERSION.x is required. Current version: $NODE_CURRENT.x" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Node.js version is correct" -ForegroundColor Green

# Navigate to project directory
Set-Location $PROJECT_DIR

# Install/Update dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
if (Get-Command pnpm -ErrorAction SilentlyContinue) {
    pnpm install --production=false
} else {
    Write-Host "pnpm not found, using npm..." -ForegroundColor Yellow
    npm install
}
Write-Host "✓ Dependencies installed" -ForegroundColor Green

# Build the application
Write-Host "Building application..." -ForegroundColor Yellow
if (Get-Command pnpm -ErrorAction SilentlyContinue) {
    pnpm run build
} else {
    npm run build
}
Write-Host "✓ Build completed" -ForegroundColor Green

# Create logs directory if it doesn't exist
New-Item -ItemType Directory -Force -Path "$PROJECT_DIR\logs" | Out-Null

# Check if PM2 is installed
if (-not (Get-Command pm2 -ErrorAction SilentlyContinue)) {
    Write-Host "PM2 not found. Installing PM2..." -ForegroundColor Yellow
    npm install -g pm2
}

# Stop existing PM2 process (if running)
Write-Host "Stopping existing application..." -ForegroundColor Yellow
pm2 stop spanishlingo-studios 2>$null
pm2 delete spanishlingo-studios 2>$null

# Start application with PM2
Write-Host "Starting application with PM2..." -ForegroundColor Yellow
pm2 start ecosystem.config.cjs

# Save PM2 configuration
pm2 save

Write-Host "✓ Application started successfully" -ForegroundColor Green
Write-Host "✓ Deployment completed!" -ForegroundColor Green
Write-Host ""
Write-Host "Useful commands:"
Write-Host "  pm2 status              - Check application status"
Write-Host "  pm2 logs spanishlingo-studios - View application logs"
Write-Host "  pm2 restart spanishlingo-studios - Restart application"
Write-Host "  pm2 stop spanishlingo-studios - Stop application"
