import { Router } from 'express';
import { PushMenuRoute } from './push-menu.js';
import { SaveOrderRoute } from './save-order.js';

export const WebhookRoutes = () => {
  const router = Router();

  router.use(PushMenuRoute());
  router.use(SaveOrderRoute());

  return router;
};
