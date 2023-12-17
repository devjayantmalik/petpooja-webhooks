import { Router } from 'express';
import { transformAndValidate } from 'class-transformer-validator';
import { PushMenuRequest } from '../validators/requests/PushMenuRequest.js';
import { PushMenuResponse } from '../validators/responses/PushMenuResponse.js';
import { ValidationError } from 'class-validator';

export const PushMenuRoute = () => {
  const router = Router();

  router.post('/push-menu', async (req, res) => {
    try {
      // Validate Input Request
      const data = await transformAndValidate(PushMenuRequest, req.body);
      console.log({ data });

      // Send Valid Response. We don't have validation yet but type safety is present.
      // we will implement middleware in future to automatically validate request and response.
      // this will reduce code duplicacy.
      const response: PushMenuResponse = {
        success: '1',
        message: 'Menu items are successfully listed.'
      };
      return res.json(response);
    } catch (err) {
      let errorMessage = '';
      if (Array.isArray(err) && err.shift() instanceof ValidationError) {
        const error: ValidationError = (err as ValidationError[])[0];
        errorMessage = Object.values(error.constraints || {}).join(', ');
      }

      const response: PushMenuResponse = {
        success: '0',
        message: errorMessage || err.message || 'Invalid Request Body Provided.'
      };
      return res.json(response);
    }
  });

  return router;
};
