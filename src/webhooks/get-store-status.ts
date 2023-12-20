import { transformAndValidate } from 'class-transformer-validator';
import { Router } from 'express';
import { GetStoreStatusRequest } from '../validators/requests/GetStoreStatusRequest.js';
import { GetStoreStatusResponse } from '../validators/responses/GetStoreStatusResponse.js';
import { UpdateStoreStatusRequest } from '../validators/requests/UpdateStoreStatusRequest.js';
import { db } from '../database.js';

export const GetStoreStatusRoute = () => {
  const router = Router();

  router.post('/get-store-status', async (req, res) => {
    try {
      // Validate Input Request
      const data = (await transformAndValidate(
        GetStoreStatusRequest,
        req.body
      )) as GetStoreStatusRequest;

      const status = await db.updateStoreStatusRequest.findFirst({
        where: { uid: data.restID }
      });

      if (!status) throw new Error("Status with provided id doesn't exist.");

      const response: GetStoreStatusResponse = {
        http_code: 200,
        status: 'success',
        store_status: String((status.contents as any).store_status),
        message: 'Store Delivery Status fetched successfully'
      };
      return res.json(response);
    } catch (err) {
      // TODO: We don't need any Response, Just log the error whereever you want.
      return res.status(400).end();
    }
  });

  return router;
};
