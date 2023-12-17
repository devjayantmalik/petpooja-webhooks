import { Router } from 'express';
import { PushMenuRoute } from './push-menu.js';
import { SaveOrderRoute } from './save-order.js';
import { OrderCallbackRoute } from './order-callback.js';
import { UpdateOrderStatusRoute } from './update-order-status.js';

export const WebhookRoutes = () => {
  const router = Router();

  router.use(PushMenuRoute());
  router.use(SaveOrderRoute());
  router.use(OrderCallbackRoute());
  router.use(UpdateOrderStatusRoute());

  return router;
};
