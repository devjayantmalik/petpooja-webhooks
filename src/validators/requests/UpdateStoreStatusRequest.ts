import { IsNumber, IsString } from 'class-validator';

export class UpdateStoreStatusRequest {
  @IsString()
  restID: string;
  @IsNumber()
  store_status: number;
  @IsString()
  turn_on_time: string;
  @IsString()
  reason: string;
}
