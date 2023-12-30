import { IsString } from 'class-validator';

export class PhonepeRefundRequest {
  @IsString()
  userId: string;

  @IsString()
  merchantTxnId: string;
}
