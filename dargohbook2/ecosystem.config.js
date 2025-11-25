module.exports = {
  apps: [
    {
      name: 'dargohbook',
      script: 'node_modules/.bin/next',
      args: 'start -p 8072',
      env: {
        NODE_ENV: 'production',
        PORT: 8072,
      },
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};
