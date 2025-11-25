module.exports = {
  apps: [
    {
      name: 'dargohbook',
      script: 'node_modules/.bin/next',
      args: 'start -p 8072',
      env: {
        NODE_ENV: 'production',
        PORT: 8072,
        DB_HOST: 'localhost',
        DB_PORT: 5437,
        DB_USERNAME: 'postgres',
        DB_PASSWORD: 'password',
        DB_NAME: 'dargohbook_secret_2024',
        BILLZ_API_URL: 'https://dargox.billz.io/api/v2',
        BILLZ_PLATFORM_ID: '7d4a4c38-dd84-4902-b744-0488b80a4c01',
        BILLZ_PHONE: '+998951590102',
        BILLZ_PASSWORD: 'sardor0102',
        SYNC_INTERVAL: 30,
      },
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};
