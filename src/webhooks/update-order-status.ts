import { transformAndValidate } from 'class-transformer-validator';
import { ValidationError } from 'class-validator';
import { Router } from 'express';
import { UpdateOrderStatusRequest } from '../validators/requests/UpdateOrderStatusRequest.js';
import {
  UpdateOrderStatusErrorResponse,
  UpdateOrderStatusResponse
} from '../validators/responses/UpdateOrderStatusResponse.js';

export const UpdateOrderStatusRoute = () => {
  const router = Router();

  router.post('/save-order', async (req, res) => {
    try {
      // Validate Input Request
      const data = (await transformAndValidate(
        UpdateOrderStatusRequest,
        req.body
      )) as UpdateOrderStatusRequest;
      console.log({ data });

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
        validation_errors: (err[0] as ValidationError).constraints || {}
      };
      return res.json(response);
    }
  });

  return router;
};
