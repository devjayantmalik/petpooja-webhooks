import { transformAndValidate } from 'class-transformer-validator';
import { ValidationError } from 'class-validator';
import { Router } from 'express';
import { UpdateOrderStatusRequest } from '../validators/requests/UpdateOrderStatusRequest.js';
import {
  UpdateOrderStatusErrorResponse,
  UpdateOrderStatusResponse
} from '../validators/responses/UpdateOrderStatusResponse.js';
import { db } from '../database.js';
import { toJson } from '../utils/toJson.js';
import { env } from '../env.js';

export const UpdateOrderStatusRoute = () => {
  const router = Router();

  router.post('/update-order-status', async (req, res) => {
    try {
      // Validate Input Request
      const data = (await transformAndValidate(
        UpdateOrderStatusRequest,
        req.body
      )) as UpdateOrderStatusRequest;

      const headers = new Headers();
      headers.set('Content-Type', 'application/json');
      const result = await fetch(`${env.petpoojaBaseUrl}/update_order_status`, {
        body: toJson(data),
        method: 'POST',
        headers: headers
      });

      console.log({ status: result.status, result: await result.json() });

      await db.updateOrderStatusRequest.upsert({
        where: { uid: data.clientorderID },
        create: { uid: data.clientorderID, contents: toJson(data) },
        update: { contents: toJson(data) }
      });

      // Send Valid Response. We don't have validation yet but type safety is present.
      // we will implement middleware in future to automatically validate request and response.
      // this will reduce code duplicacy.
      // TODO: Figure out this orderId 26 thing.
      const response: UpdateOrderStatusResponse = {
        success: '1',
        message: 'Order status updated successfully.',
        restID: data.restID,
        orderID: data.orderID,
        status: data.status
      };
      return res.json(response);
    } catch (err) {
      // TODO: For now this is not fully implemented error handling. But we have basic for now.

      const response: UpdateOrderStatusErrorResponse = {
        //This error  message is shown when order is modified or status of order is changed by restaurant.
        success: '0',
        message: 'There were some error in update order status.',
        errorCode: 'UOS_105',
        validation_errors: (err[0] as ValidationError)?.constraints || {}
      };
      return res.status(400).json(response);
    }
  });

  return router;
};
