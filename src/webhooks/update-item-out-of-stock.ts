import { transformAndValidate } from 'class-transformer-validator';
import { ValidationError } from 'class-validator';
import { Router } from 'express';
import { UpdateItemOutOfStockRequest } from '../validators/requests/UpdateItemOutOfStockRequest.js';
import {
  UpdateItemOutOfStockErrorResponse,
  UpdateItemOutOfStockResponse
} from '../validators/responses/UpdateItemOutOfStockResponse.js';
import { db } from '../database.js';
import { toJson } from '../utils/toJson.js';

export const UpdateItemOutOfStockRoute = () => {
  const router = Router();

  router.post('/update-item-out-of-stock', async (req, res) => {
    try {
      // Validate Input Request
      const data = (await transformAndValidate(
        UpdateItemOutOfStockRequest,
        req.body
      )) as UpdateItemOutOfStockRequest;

      await db.updateItemOutOfStockRequest.upsert({
        where: { uid: data.itemID.join('') },
        create: { uid: data.itemID.join(''), contents: toJson(data) },
        update: { contents: toJson(data) }
      });

      // Send Valid Response. We don't have validation yet but type safety is present.
      // we will implement middleware in future to automatically validate request and response.
      // this will reduce code duplicacy.
      // TODO: Figure out this orderId 26 thing.
      const response: UpdateItemOutOfStockResponse = {
        code: 200,
        status: 'success',
        message: 'Stock status updated successfully'
      };
      return res.json(response);
    } catch (err) {
      console.log({ err });

      // TODO: For now this is not fully implemented error handling. But we have basic for now.

      const response: UpdateItemOutOfStockErrorResponse = {
        code: '400',
        message: 'Stock status not updated successfully',
        success: 'failed',
        errorCode: 'UOS_105',
        validation_errors: (err[0] as ValidationError).constraints || {}
      };
      return res.status(400).json(response);
    }
  });

  return router;
};
