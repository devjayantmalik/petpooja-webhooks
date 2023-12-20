import { IsNumber, IsOptional, IsString } from 'class-validator';

export class OrderCallbackRequest {
  @IsString()
  restID: string;
  @IsString()
  orderID: string;
  @IsString()
  status: string;
  @IsOptional()
  @IsString()
  cancel_reason: string;
  @IsOptional()
  @IsNumber()
  minimum_prep_time: number;
  @IsOptional()
  @IsNumber()
  minimum_delivery_time: number;
  @IsOptional()
  @IsString()
  rider_name: string;
  @IsOptional()
  @IsString()
  rider_phone_number: string;
  @IsOptional()
  @IsString()
  is_modified: string;
}
