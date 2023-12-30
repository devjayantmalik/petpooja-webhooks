import { transformAndValidate } from 'class-transformer-validator';
import crypto from 'crypto';
import { Router } from 'express';
import { db } from '../database.js';
import { env } from '../env.js';
import { PhonepeRefundRequest } from '../validators/apis/requests/PhonepeRefundRequest.js';
import { v4 } from 'uuid';

interface IPayload {
  merchantId: string;
  merchantUserId: string;
  originalTransactionId: string;
  merchantTransactionId: string;
  amount: number;
  callbackUrl: string;
}

export const PhonepeRefundRoute = () => {
  const router = Router();

  router.post('/phonepe-refund', async (req, res) => {
    try {
      // Validate Input Request
      const data = (await transformAndValidate(
        PhonepeRefundRequest,
        req.body
      )) as PhonepeRefundRequest;

      const txn = await db.phonepePayRequest.findFirst({
        where: { merchantTxnId: data.merchantTxnId }
      });

      if (!txn) throw new Error("Merchant with provided txnId doesn't exist.");
      const refundTxnId = v4();
      const payload: IPayload = JSON.parse(
        JSON.stringify({
          merchantId: env.phonepe.merchantId,
          merchantUserId: env.phonepe.merchantUserId,
          originalTransactionId: txn.merchantTxnId,
          merchantTransactionId: refundTxnId,
          amount: txn.amount,
          callbackUrl: 'https://webhook.site/callback-url'
        } as IPayload)
      );

      const json_payload = JSON.stringify(payload);
      const payloadBase64 = Buffer.from(json_payload).toString('base64');

      const x_verify =
        crypto
          .createHash('sha256')
          .update(payloadBase64 + `/pg/v1/refund/` + env.phonepe.saltKey)
          .digest('hex') +
        ('###' + env.phonepe.saltIndex);

      const phonePeResponse = await fetch(`${env.phonepe.baseUrl}/pg/v1/refund`, {
        method: 'POST',
        body: JSON.stringify({ request: payloadBase64 }),
        headers: {
          'Content-Type': 'application/json',
          'X-VERIFY': x_verify
        }
      });

      const responseData = await phonePeResponse.json();

      // Save Request to Database
      await db.phonepeRefund.create({
        data: {
          userId: txn.userId,
          merchantTxnId: txn.merchantTxnId,
          phoneNumber: txn.phoneNumber,
          amount: txn.amount,
          contents: responseData
        }
      });

      return res.json({ success: responseData.success, state: responseData.data.state });
    } catch (err) {
      console.log({ err });
      // TODO: We don't need any Response, Just log the error whereever you want.
      return res.status(400).end();
    }
  });

  return router;
};
