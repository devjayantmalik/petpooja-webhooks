import { Router } from 'express';
import { PushMenuRoute } from './push-menu.js';

export const WebhookRoutes = () => {
  const router = Router();

  router.use(PushMenuRoute());

  return router;
};
