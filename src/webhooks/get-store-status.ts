import { transformAndValidate } from 'class-transformer-validator';
import { Router } from 'express';
import { GetStoreStatusRequest } from '../validators/requests/GetStoreStatusRequest.js';
import { GetStoreStatusResponse } from '../validators/responses/GetStoreStatusResponse.js';

export const GetStoreStatusRoute = () => {
  const router = Router();

  router.post('/get-store-status', async (req, res) => {
    try {
      // Validate Input Request
      const data = (await transformAndValidate(
        GetStoreStatusRequest,
        req.body
      )) as GetStoreStatusRequest;
      console.log({ data });

      const response: GetStoreStatusResponse = {
        http_code: 200,
        status: 'success',
        store_status: '1',
        message: 'Store Delivery Status fetched successfully'
      };
      return res.json(response);
    } catch (err) {
      // TODO: We don't need any Response, Just log the error whereever you want.
      return res.status(400);
    }
  });

  return router;
};
