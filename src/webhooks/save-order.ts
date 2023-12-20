import { transformAndValidate } from 'class-transformer-validator';
import { ValidationError } from 'class-validator';
import { Router } from 'express';
import { SaveOrderRequest } from '../validators/requests/SaveOrderRequest.js';
import {
  SaveOrderErrorResponse,
  SaveOrderResponse
} from '../validators/responses/SaveOrderResponse.js';
import { db } from '../database.js';
import { toJson } from '../utils/toJson.js';
import { env } from '../env.js';

export const SaveOrderRoute = () => {
  const router = Router();

  router.post('/save-order', async (req, res) => {
    try {
      // Validate Input Request
      const data = (await transformAndValidate(SaveOrderRequest, req.body)) as SaveOrderRequest;

      // Send Request to Petpooja
      const headers = new Headers();
      headers.set('Content-Type', 'application/json');
      const result = await fetch(`${env.petpoojaBaseUrl}/save_order`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: headers
      });
      console.log({ status: result.status, result: await result.json() });

      // add to database
      await db.saveOrderRequest.upsert({
        where: { uid: data.orderinfo.OrderInfo.Order.details.orderID },
        create: { uid: data.orderinfo.OrderInfo.Order.details.orderID, contents: toJson(data) },
        update: { contents: toJson(data) }
      });
      // Send Valid Response. We don't have validation yet but type safety is present.
      // we will implement middleware in future to automatically validate request and response.
      // this will reduce code duplicacy.
      // TODO: Figure out this orderId 26 thing.
      const response: SaveOrderResponse = {
        success: '1',
        message: 'Your order is saved.',
        restID: data.orderinfo.OrderInfo.Restaurant.details.restID,
        clientOrderID: data.orderinfo.OrderInfo.Order.details.orderID,
        orderID: '26'
      };
      return res.json(response);
    } catch (err) {
      // TODO: For now this is not fully implemented error handling. But we have basic for now.
      let errorMessage = '';
      console.log({ err });
      const validation_errors: SaveOrderErrorResponse['validation_errors'] = {};
      if (Array.isArray(err) && err.shift() instanceof ValidationError) {
        const error: ValidationError = (err as ValidationError[])[0];

        // Prepare errors
        Object.entries(error?.constraints || {}).map(([key, value]) => {
          validation_errors[key] = [value];
        });
      }

      const response: SaveOrderErrorResponse = {
        success: '0',
        message: errorMessage || err.message || 'Invalid Request Body Provided.',
        errorCode: 'SO_105',
        validation_errors: validation_errors
      };
      return res.status(400).json(response);
    }
  });

  return router;
};
