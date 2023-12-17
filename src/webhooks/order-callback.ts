import { transformAndValidate } from 'class-transformer-validator';
import { Router } from 'express';
import { OrderCallbackRequest } from 'src/validators/requests/OrderCallbackRequest.js';

export const OrderCallbackRoute = () => {
  const router = Router();

  router.post('/order-callback', async (req, res) => {
    try {
      // Validate Input Request
      const data = (await transformAndValidate(
        OrderCallbackRequest,
        req.body
      )) as OrderCallbackRequest;
      console.log({ data });

      // We don't need any Response, Just need to respond with 200.
      return res.status(200);
    } catch (err) {
      // TODO: We don't need any Response, Just log the error whereever you want.
      return res.status(400);
    }
  });

  return router;
};
