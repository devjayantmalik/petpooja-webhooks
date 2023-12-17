import { IsNumber, IsString } from 'class-validator';

export class OrderCallbackRequest {
  @IsString()
  restID: string;
  @IsString()
  orderID: string;
  @IsString()
  status: string;
  @IsString()
  cancel_reason: string;
  @IsNumber()
  minimum_prep_time: number;
  @IsString()
  minimum_delivery_time: string;
  @IsString()
  rider_name: string;
  @IsString()
  rider_phone_number: string;
  @IsString()
  is_modified: string;
}
