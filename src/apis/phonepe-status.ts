import { transformAndValidate } from 'class-transformer-validator';
import crypto from 'crypto';
import { Router } from 'express';
import { db } from '../database.js';
import { env } from '../env.js';
import { PhonepeStatusRequest } from '../validators/apis/requests/PhonepeStatusRequest.js';

export const PhonepeStatusRoute = () => {
  const router = Router();

  router.post('/phonepe-status', async (req, res) => {
    try {
      // Validate Input Request
      const data = (await transformAndValidate(
        PhonepeStatusRequest,
        req.body
      )) as PhonepeStatusRequest;

      const txn = await db.phonepePayRequest.findFirst({
        where: { merchantTxnId: data.merchantTxnId }
      });

      if (!txn) throw new Error("Merchant with provided txnId doesn't exist.");

      const x_verify =
        crypto
          .createHash('sha256')
          .update(
            `/pg/v1/status/${env.phonepe.merchantId}/${txn.merchantTxnId}` + env.phonepe.saltKey
          )
          .digest('hex') +
        ('###' + env.phonepe.saltIndex);

      const phonePeResponse = await fetch(
        `${env.phonepe.baseUrl}/pg/v1/status/${env.phonepe.merchantId}/${txn.merchantTxnId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-VERIFY': x_verify,
            'X-MERCHANT-ID': env.phonepe.merchantId
          }
        }
      );

      const responseData = await phonePeResponse.json();

      // Save Request to Database
      await db.phonepePayStatus.upsert({
        where: { merchantTxnId: txn.merchantTxnId },
        create: {
          userId: txn.userId,
          merchantTxnId: txn.merchantTxnId,
          phoneNumber: txn.phoneNumber,
          contents: responseData
        },
        update: {
          contents: responseData
        }
      });

      return res.json(responseData);
    } catch (err) {
      console.log({ err });
      // TODO: We don't need any Response, Just log the error whereever you want.
      return res.status(400).end();
    }
  });

  return router;
};
