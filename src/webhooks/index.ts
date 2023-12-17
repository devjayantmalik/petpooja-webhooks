import { Router } from 'express';
import { PushMenuRoute } from './push-menu.js';
import { SaveOrderRoute } from './save-order.js';
import { OrderCallbackRoute } from './order-callback.js';
import { UpdateOrderStatusRoute } from './update-order-status.js';
import { UpdateItemInStockRoute } from './update-item-in-stock.js';
import { UpdateItemOutOfStockRoute } from './update-item-out-of-stock.js';

export const WebhookRoutes = () => {
  const router = Router();

  router.use(PushMenuRoute());
  router.use(SaveOrderRoute());
  router.use(OrderCallbackRoute());
  router.use(UpdateOrderStatusRoute());
  router.use(UpdateItemInStockRoute());
  router.use(UpdateItemOutOfStockRoute());

  return router;
};
