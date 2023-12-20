import { IsString, IsObject } from 'class-validator';

export class UpdateItemInStockResponse {
  @IsString()
  code: string;
  @IsString()
  status: string;
  @IsString()
  message: string;
}

export class UpdateItemInStockErrorResponse {
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
