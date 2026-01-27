// PM2 Ecosystem Configuration for aapanel/Bluehost VPS
// This file manages the Node.js application process
// Using .cjs extension because project uses ES modules ("type": "module")

module.exports = {
  apps: [
    {
      name: 'spanishlingo-studios',
      script: './dist/server/node-build.mjs',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      // Auto-restart configuration
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      
      // Logging
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_file: './logs/pm2-combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      
      // Graceful shutdown
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000,
      
      // Advanced settings
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
    },
  ],
};
