import { transformAndValidate } from 'class-transformer-validator';
import { Router } from 'express';
import { OrderCallbackRequest } from '../validators/requests/OrderCallbackRequest.js';
import { db } from '../database.js';
import { toJson } from '../utils/toJson.js';

export const OrderCallbackRoute = () => {
  const router = Router();

  router.post('/order-callback', async (req, res) => {
    try {
      // Validate Input Request
      const data = (await transformAndValidate(
        OrderCallbackRequest,
        req.body
      )) as OrderCallbackRequest;

      await db.orderCallbackRequest.upsert({
        where: { uid: data.orderID },
        create: { uid: data.orderID, contents: toJson(data) },
        update: { contents: toJson(data) }
      });

      // We don't need any Response, Just need to respond with 200.
      return res.status(200).end();
    } catch (err) {
      console.log({ err });
      // TODO: We don't need any Response, Just log the error whereever you want.
      return res.status(400).end();
    }
  });

  return router;
};
