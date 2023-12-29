import { IsString } from 'class-validator';

export class PhonepeStatusRequest {
  @IsString()
  userId: string;

  @IsString()
  merchantTxnId: string;
}
