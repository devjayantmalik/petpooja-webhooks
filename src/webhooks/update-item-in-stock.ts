import { transformAndValidate } from 'class-transformer-validator';
import { ValidationError } from 'class-validator';
import { Router } from 'express';
import { UpdateItemInStockRequest } from '../validators/requests/UpdateItemInStockRequest.js';
import {
  UpdateItemInStockErrorResponse,
  UpdateItemInStockResponse
} from '../validators/responses/UpdateItemInStockResponse.js';
import { db } from '../database.js';
import { toJson } from '../utils/toJson.js';

export const UpdateItemInStockRoute = () => {
  const router = Router();

  router.post('/update-item-in-stock', async (req, res) => {
    try {
      // Validate Input Request
      const data = (await transformAndValidate(
        UpdateItemInStockRequest,
        req.body
      )) as UpdateItemInStockRequest;

      await db.updateItemInStockRequest.upsert({
        where: { uid: data.itemID.join('').toString() },
        create: { uid: data.itemID.join('').toString(), contents: toJson(data) },
        update: { contents: toJson(data) }
      });

      // Send Valid Response. We don't have validation yet but type safety is present.
      // we will implement middleware in future to automatically validate request and response.
      // this will reduce code duplicacy.
      // TODO: Figure out this orderId 26 thing.
      const response: UpdateItemInStockResponse = {
        code: '200',
        status: 'success',
        message: 'Stock status updated successfully'
      };

      return res.json(response);
    } catch (err) {
      // TODO: For now this is not fully implemented error handling. But we have basic for now.

      const response: UpdateItemInStockErrorResponse = {
        code: '400',
        message: 'Stock status not updated successfully',
        success: 'failed',
        errorCode: 'UOS_105',
        validation_errors: (err[0] as ValidationError)?.constraints || {}
      };
      return res.status(400).json(response);
    }
  });

  return router;
};
