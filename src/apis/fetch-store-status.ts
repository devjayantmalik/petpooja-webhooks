import { Router } from 'express';
import { db } from '../database.js';
import { FetchStoreStatusResponse } from '../validators/apis/responses/FetchStoreStatusResponse.js';
import { UpdateStoreStatusRequest } from '../validators/requests/UpdateStoreStatusRequest.js';

export const FetchStoreStatusRoute = () => {
  const router = Router();

  router.get('/fetch-store-status/:restId', async (req, res) => {
    try {
      // Validate Input Request
      const order = await db.updateStoreStatusRequest.findFirst({
        where: { uid: req.params.restId }
      });

      if (!order) throw new Error('No store status found in database.');

      const response: FetchStoreStatusResponse = {
        success: true,
        result: order.contents as unknown as UpdateStoreStatusRequest
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
