import { Router } from 'express';
import { db } from '../database.js';
import { FetchSaveOrderResponse } from '../validators/apis/responses/FetchSaveOrderResponse.js';
import { SaveOrderRequest } from '../validators/requests/SaveOrderRequest.js';
import { UpdateOrderStatusRequest } from 'src/validators/requests/UpdateOrderStatusRequest.js';

export const FetchOrderStatusRoute = () => {
  const router = Router();

  router.get('/fetch-order-status/:clientOrderId', async (req, res) => {
    try {
      // Validate Input Request
      const order = await db.updateOrderStatusRequest.findFirst({
        where: { uid: req.params.clientOrderId }
      });

      if (!order) throw new Error('No order status found in database.');

      const response: FetchSaveOrderResponse = {
        success: true,
        result: order.contents as unknown as UpdateOrderStatusRequest
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
