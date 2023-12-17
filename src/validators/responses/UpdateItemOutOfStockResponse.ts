import { IsNumber, IsString } from 'class-validator';

export class UpdateItemOutOfStockResponse {
  @IsNumber()
  code: number;
  @IsString()
  status: string;
  @IsString()
  message: string;
}

export class UpdateItemOutOfStockErrorResponse {
  @IsString()
  code: string;
  @IsString()
  message: string;
  @IsString()
  success: string;
  @IsString()
  errorCode: string;
  @IsObject()
  validation_errors: Record<string, string>;
}
