import { Router } from 'express';
import { GetStoreStatusResponse } from '../validators/responses/GetStoreStatusResponse.js';
import { db } from '../database.js';
import { FetchMenuResponse } from '../validators/apis/responses/FetchMenuResponse.js';
import { PushMenuRequest } from 'src/validators/requests/PushMenuRequest.js';

export const FetchMenuRoute = () => {
  const router = Router();

  router.get('/fetch-menu', async (_req, res) => {
    try {
      // Validate Input Request
      const menu = await db.pushMenuRequest.findFirst({
        where: {},
        orderBy: { id: 'desc' }
      });

      if (!menu) throw new Error('No menus found in database.');

      const response: FetchMenuResponse = {
        success: true,
        result: menu.contents as unknown as PushMenuRequest
      };
      return res.json(response);
    } catch (err) {
      console.log({ err });
      // TODO: We don't need any Response, Just log the error whereever you want.
      return res.status(400).end();
    }
  });

  return router;
};
