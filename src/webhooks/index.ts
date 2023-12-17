import { Router } from 'express';
import { PushMenuRoute } from './push-menu.js';
import { SaveOrderRoute } from './save-order.js';
import { OrderCallbackRoute } from './order-callback.js';

export const WebhookRoutes = () => {
  const router = Router();

  router.use(PushMenuRoute());
  router.use(SaveOrderRoute());
  router.use(OrderCallbackRoute());

  return router;
};
