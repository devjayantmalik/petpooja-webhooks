import { transformAndValidate } from 'class-transformer-validator';
import crypto from 'crypto';
import { Router } from 'express';
import { PhonepePayResponse } from 'src/validators/apis/responses/PhonepePayResponse.js';
import { v4 } from 'uuid';
import { env } from '../env.js';
import { PhonepePayRequest } from '../validators/apis/requests/PhonepePayRequest.js';
import { db } from '../database.js';

interface IPayload {
  merchantId: string;
  merchantTransactionId: string;
  merchantUserId: string;
  amount: number;
  callbackUrl: string;
  mobileNumber: string;
  paymentInstrument: { type: string };
  redirectUrl: string | undefined;
  redirectMode: string | undefined;
}

export const PhonepePayRoute = () => {
  const router = Router();

  router.post('/phonepe-pay', async (req, res) => {
    try {
      // Validate Input Request
      const data = (await transformAndValidate(PhonepePayRequest, req.body)) as PhonepePayRequest;
      const merchantTxnId = v4();
      const payload: IPayload = JSON.parse(
        JSON.stringify({
          merchantId: env.phonepe.merchantId,
          merchantTransactionId: merchantTxnId,
          merchantUserId: env.phonepe.merchantUserId,
          amount: data.amount,
          callbackUrl: 'https://webhook.site/callback-url',
          mobileNumber: data.phoneNumber,
          paymentInstrument: { type: 'PAY_PAGE' },
          redirectUrl: data.isAndroid ? undefined : 'https://webhook.site/redirect-url',
          redirectMode: data.isAndroid ? undefined : 'REDIRECT'
        })
      );

      // Convert transaction details to Base64 encoded string
      const json_payload = JSON.stringify(payload);
      const payloadBase64 = Buffer.from(json_payload).toString('base64');

      // Calculate checksum (X-Verify) using SHA256
      const sha256Hash = crypto
        .createHash('sha256')
        .update(`${payloadBase64}/pg/v1/pay${env.phonepe.saltKey}`)
        .digest('hex');
      const x_verify = sha256Hash + '###' + env.phonepe.saltIndex;

      const headers = {
        'Content-Type': 'application/json',
        'X-VERIFY': x_verify
      };

      const phonepeResponse = await fetch(`${env.phonepe.baseUrl}/pg/v1/pay`, {
        method: 'POST',
        body: JSON.stringify({ request: payloadBase64 }),
        headers: headers
      });

      const responseData = await phonepeResponse.json();

      // Save Request to Database
      await db.phonepePayRequest.create({
        data: {
          userId: data.userId,
          phoneNumber: data.phoneNumber,
          merchantTxnId: merchantTxnId,
          contents: { ...responseData }
        }
      });

      const response: PhonepePayResponse = {
        base64_encoded_payload: payloadBase64,
        merchantId: env.phonepe.merchantId,
        merchantTransactionId: merchantTxnId,
        x_verify: x_verify
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
