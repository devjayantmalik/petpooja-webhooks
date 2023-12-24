import { Router } from 'express';
import { db } from '../database.js';
import { UpdateItemOutOfStockRequest } from '../validators/requests/UpdateItemOutOfStockRequest.js';
import { FetchItemOutOfStockResponse } from '../validators/apis/responses/FetchItemOutOfStockResponse.js';

export const FetchItemOutOfStockRoute = () => {
  const router = Router();

  router.get('/fetch-item-out-of-stock', async (_req, res) => {
    try {
      // Validate Input Request
      const item = await db.updateItemOutOfStockRequest.findFirst({
        where: {},
        orderBy: { id: 'desc' }
      });

      if (!item) throw new Error('No item out of stock found in database.');

      const response: FetchItemOutOfStockResponse = {
        success: true,
        result: item.contents as unknown as UpdateItemOutOfStockRequest
      };
      return res.json(response);
    } catch (err) {
      console.log({ err });
      // TODO: We don't need any Response, Just log the error whereever you want.
      return res.status(400).end();
    }
  });

  return router;
};
