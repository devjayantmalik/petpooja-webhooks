export const env = {
  port: parseInt(process.env.PORT || '') || 3000,
  host: '127.0.0.1',
  petpoojaBaseUrl: process.env.PETPOOJA_BASE_URL,
  saveOrderAppKey: process.env.SAVE_ORDER_APP_KEY || '',
  saveOrderAppSecret: process.env.SAVE_ORDER_APP_SECRET || '',
  saveOrderAccessToken: process.env.SAVE_ORDER_ACCESS_TOKEN || ''
};

if (!env.saveOrderAppKey) throw new Error('SAVE_ORDER_APP_KEY is not set in .env file');
if (!env.saveOrderAppSecret) throw new Error('SAVE_ORDER_APP_SECRET is not set in .env file');
if (!env.saveOrderAccessToken) throw new Error('SAVE_ORDER_ACCESS_TOKEN is not set in .env file');
if (!env.petpoojaBaseUrl) throw new Error('PETPOOJA_BASE_URL is not set in .env file');
