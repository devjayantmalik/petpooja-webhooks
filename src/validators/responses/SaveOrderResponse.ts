import { IsObject, IsString } from 'class-validator';

export class SaveOrderResponse {
  @IsString()
  success: string;
  @IsString()
  message: string;
  @IsString()
  restID: string;
  @IsString()
  clientOrderID: string;
  @IsString()
  orderID: string;
}

export class SaveOrderErrorResponse {
  @IsString()
  success: string;
  @IsString()
  message: string;
  @IsString()
  errorCode: string;
  @IsObject()
  validation_errors: Record<string, string[]>;
}
