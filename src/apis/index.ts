import { Router } from 'express';
import { FetchMenuRoute } from './fetch-menu.js';
import { FetchItemInStockRoute } from './fetch-item-in-stock.js';
import { FetchItemOutOfStockRoute } from './fetch-item-out-of-stock.js';
import { FetchSaveOrderRoute } from './fetch-save-order.js';
import { FetchStoreStatusRoute } from './fetch-store-status.js';
import { FetchOrderStatusRoute } from './fetch-order-status.js';

export const ApiRoutes = () => {
  const router = Router();

  router.use(FetchMenuRoute());
  router.use(FetchItemInStockRoute());
  router.use(FetchOrderStatusRoute());
  router.use(FetchItemOutOfStockRoute());
  router.use(FetchSaveOrderRoute());
  router.use(FetchStoreStatusRoute());

  return router;
};
