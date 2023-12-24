import { Router } from 'express';
import { db } from '../database.js';
import { FetchItemInStockResponse } from '../validators/apis/responses/FetchItemInStockResponse.js';
import { UpdateItemInStockRequest } from '../validators/requests/UpdateItemInStockRequest.js';

export const FetchItemInStockRoute = () => {
  const router = Router();

  router.get('/fetch-item-in-stock', async (_req, res) => {
    try {
      // Validate Input Request
      const item = await db.updateItemInStockRequest.findFirst({
        where: {},
        orderBy: { id: 'desc' }
      });

      if (!item) throw new Error('No item in stock found in database.');

      const response: FetchItemInStockResponse = {
        success: true,
        result: item.contents as unknown as UpdateItemInStockRequest
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
