import { IsString, IsNumber } from 'class-validator';

export class GetStoreStatusResponse {
  @IsNumber()
  http_code: number;
  @IsString()
  status: string;
  @IsString()
  store_status: string;
  @IsString()
  message: string;
}
