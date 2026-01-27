#!/bin/bash

# Deployment Script for SpanishLingo Studios - Bluehost VPS (aapanel)
# This script builds and deploys the application

set -e  # Exit on any error

echo "🚀 Starting deployment for SpanishLingo Studios..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
PROJECT_DIR="/www/wwwroot/spanishlingo-studios.com"
NODE_VERSION="20"

# Check if Node.js version is correct
echo -e "${YELLOW}Checking Node.js version...${NC}"
NODE_CURRENT=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_CURRENT" != "$NODE_VERSION" ]; then
    echo -e "${RED}Error: Node.js version $NODE_VERSION.x is required. Current version: $NODE_CURRENT.x${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Node.js version is correct${NC}"

# Navigate to project directory
cd "$PROJECT_DIR" || exit 1

# Install/Update dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
if command -v pnpm &> /dev/null; then
    pnpm install --production=false
else
    echo -e "${YELLOW}pnpm not found, using npm...${NC}"
    npm install
fi
echo -e "${GREEN}✓ Dependencies installed${NC}"

# Build the application
echo -e "${YELLOW}Building application...${NC}"
if command -v pnpm &> /dev/null; then
    pnpm run build
else
    npm run build
fi
echo -e "${GREEN}✓ Build completed${NC}"

# Create logs directory if it doesn't exist
mkdir -p "$PROJECT_DIR/logs"

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}PM2 not found. Installing PM2...${NC}"
    npm install -g pm2
fi

# Stop existing PM2 process (if running)
echo -e "${YELLOW}Stopping existing application...${NC}"
pm2 stop spanishlingo-studios 2>/dev/null || true
pm2 delete spanishlingo-studios 2>/dev/null || true

# Start application with PM2
echo -e "${YELLOW}Starting application with PM2...${NC}"
pm2 start ecosystem.config.cjs

# Save PM2 configuration
pm2 save

# Setup PM2 to start on system boot
pm2 startup | grep -v PM2 | bash || true

echo -e "${GREEN}✓ Application started successfully${NC}"
echo -e "${GREEN}✓ Deployment completed!${NC}"
echo ""
echo "Useful commands:"
echo "  pm2 status              - Check application status"
echo "  pm2 logs spanishlingo-studios - View application logs"
echo "  pm2 restart spanishlingo-studios - Restart application"
echo "  pm2 stop spanishlingo-studios - Stop application"
