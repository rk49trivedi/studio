# Quick Start Guide - aapanel Deployment

## 🚀 Quick Deployment Steps

### 1. Upload Files to Server

Upload all project files to: `/www/wwwroot/spanishlingo-studios.com/`

### 2. SSH into Server

```bash
ssh root@your-server-ip
cd /www/wwwroot/spanishlingo-studios.com
```

### 3. Install Node.js 20 (if needed)

```bash
# Using nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
nvm alias default 20

# Install PM2 and pnpm globally
npm install -g pm2 pnpm
```

### 4. Configure Environment

```bash
# Copy example env file
cp .env.example .env

# Edit with your values
nano .env
```

**Required values in `.env`:**
- `SMTP_PASSWORD` - Your SMTP password (NO quotes!)
- `OWNER_EMAIL` - Your email address
- Other values should already be set

### 5. Build and Deploy

```bash
# Install dependencies
pnpm install

# Build application
pnpm run build

# Make deploy script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

### 6. Configure aapanel

1. **Create Node.js Project:**
   - Go to **Website** → **Add Site**
   - Select **Node Project** (NOT PHP!)
   - Domain: `spanishlingo-studios.com`
   - Port: `3000`
   - Startup File: `dist/server/node-build.mjs`
   - Node Version: `20.x`

2. **Configure Nginx:**
   - Go to **Website** → Your Site → **Settings** → **Configuration Files** → **Nginx Config**
   - Replace entire config with contents of `nginx.conf`
   - Save and reload Nginx

3. **Enable SSL:**
   - Go to **Website** → Your Site → **SSL**
   - Enable **Let's Encrypt**
   - Enable **Force HTTPS**

### 7. Verify

```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs spanishlingo-studios

# Test health endpoint
curl http://localhost:3000/health
```

Visit: `https://spanishlingo-studios.com`

## 📋 Important Notes

- ✅ Use **Node Project** in aapanel, NOT PHP Project
- ✅ Port must be `3000` (or match your `.env` PORT)
- ✅ SVGs are cached for 1 year - first load may be slow, subsequent loads will be fast
- ✅ Check `pm2 logs` if something doesn't work

## 🔧 Common Commands

```bash
# Restart application
pm2 restart spanishlingo-studios

# View logs
pm2 logs spanishlingo-studios

# Stop application
pm2 stop spanishlingo-studios

# Update application
git pull
./deploy.sh
```

## 📖 Full Documentation

See `DEPLOYMENT.md` for detailed instructions and troubleshooting.
