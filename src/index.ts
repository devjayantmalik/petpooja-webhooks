import express from 'express';
import { WebhookRoutes } from './webhooks/index.js';
import { env } from './env.js';
import { ApiRoutes } from './apis/index.js';

export const main = async () => {
  const app = express();

  app.use(express.json({ limit: '20mb' }));

  app.get('/health', (_req, res) => res.sendStatus(200));

  app.use((req, _res, next) => {
    console.log({ url: req.originalUrl, headers: req.headers['content-type'] });
    return next();
  });

  app.use('/webhooks', WebhookRoutes());
  app.use('/apis', ApiRoutes());

  app.use('*', (_req, res) => {
    return res.status(404).end();
  });

  app.listen(env.port, env.host, () =>
    console.log(`Server started at: http://${env.host}:${env.port}`)
  );
};

main().catch(console.error);
