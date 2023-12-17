import express from 'express';
import { WebhookRoutes } from './webhooks/index.js';
import { env } from './env.js';

export const main = async () => {
  const app = express();

  app.use(express.json({ limit: '20mb' }));

  app.use('/webhooks', WebhookRoutes());

  app.listen(env.port, env.host, () =>
    console.log(`Server started at: http://${env.host}:${env.port}`)
  );
};

main().catch(console.error);
