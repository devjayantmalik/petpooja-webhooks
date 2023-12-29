import { IsBoolean, IsString } from 'class-validator';

export class PhonepePayResponse {
  @IsString()
  base64_encoded_payload: string;

  @IsString()
  x_verify: string;

  @IsString()
  merchantId: string;

  @IsString()
  merchantTransactionId: string;
}

export class PhonepePayAPIResonse {
  @IsBoolean()
  success: boolean;

  @IsString()
  code: string;

  @IsString()
  message: string;
}
