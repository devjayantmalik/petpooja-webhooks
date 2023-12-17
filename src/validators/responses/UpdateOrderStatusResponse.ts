import { IsObject, IsString } from 'class-validator';

export class UpdateOrderStatusResponse {
  @IsString()
  success: string;
  @IsString()
  message: string;
  @IsString()
  restID: string;
  @IsString()
  orderID: string;
  @IsString()
  status: string;
}

export class UpdateOrderStatusErrorResponse {
  @IsString()
  success: string;
  @IsString()
  message: string;
  @IsString()
  errorCode: string;
  @IsObject()
  validation_errors: Record<string, string>;
}
