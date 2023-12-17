import { IsString } from 'class-validator';

export class UpdateOrderStatusRequest {
  @IsString()
  app_key: string;
  @IsString()
  app_secret: string;
  @IsString()
  access_token: string;
  @IsString()
  restID: string;
  @IsString()
  orderID: string;
  @IsString()
  clientorderID: string;
  @IsString()
  cancelReason: string;
  @IsString()
  status: string;
}
