import { transformAndValidate } from 'class-transformer-validator';
import { Router } from 'express';
import { UpdateStoreStatusRequest } from '../validators/requests/UpdateStoreStatusRequest.js';
import { UpdateStoreStatusResponse } from '../validators/responses/UpdateStoreStatusResponse.js';

export const UpdateStoreStatusRoute = () => {
  const router = Router();

  router.post('/update-store-status', async (req, res) => {
    try {
      // Validate Input Request
      const data = (await transformAndValidate(
        UpdateStoreStatusRequest,
        req.body
      )) as UpdateStoreStatusRequest;
      console.log({ data });

      const response: UpdateStoreStatusResponse = {
        http_code: 200,
        status: 'success',
        message: 'Store Status updated successfully for store restID'
      };
      return res.json(response);
    } catch (err) {
      // TODO: We don't need any Response, Just log the error whereever you want.
      return res.status(400);
    }
  });

  return router;
};
