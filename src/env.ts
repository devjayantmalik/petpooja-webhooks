export const env = {
  port: parseInt(process.env.PORT || '') || 3000,
  host: '0.0.0.0',
  petpoojaBaseUrl: process.env.PETPOOJA_BASE_URL,
  saveOrderAppKey: process.env.SAVE_ORDER_APP_KEY || '',
  saveOrderAppSecret: process.env.SAVE_ORDER_APP_SECRET || '',
  saveOrderAccessToken: process.env.SAVE_ORDER_ACCESS_TOKEN || '',

  // Phonepe Variables
  phonepe: {
    merchantId: process.env.PHONEPE_MERCHANT_ID || '',
    merchantUserId: process.env.PHONEPE_MERCHANT_USERID || '',
    baseUrl: process.env.PHONEPE_BASE_URL || '',
    saltKey: process.env.PHONEPE_SALT_KEY || '',
    saltIndex: process.env.PHONEPE_SALT_INDEX || ''
  }
};

if (!env.saveOrderAppKey) throw new Error('SAVE_ORDER_APP_KEY is not set in .env file');
if (!env.saveOrderAppSecret) throw new Error('SAVE_ORDER_APP_SECRET is not set in .env file');
if (!env.saveOrderAccessToken) throw new Error('SAVE_ORDER_ACCESS_TOKEN is not set in .env file');
if (!env.petpoojaBaseUrl) throw new Error('PETPOOJA_BASE_URL is not set in .env file');
if (!env.phonepe.merchantId) throw new Error('PHONEPE_MERCHANT_ID is not set in .env file');
if (!env.phonepe.merchantUserId) throw new Error('PHONEPE_MERCHANT_USERID is not set in .env file');
if (!env.phonepe.baseUrl) throw new Error('PHONEPE_BASE_URL is not set in .env file');
if (!env.phonepe.saltKey) throw new Error('PHONEPE_SALT_KEY is not set in .env file');
if (!env.phonepe.saltIndex) throw new Error('PHONEPE_SALT_INDEX is not set in .env file');
