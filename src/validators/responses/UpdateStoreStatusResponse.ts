import { IsNumber, IsString } from 'class-validator';

export class UpdateStoreStatusResponse {
  @IsNumber()
  http_code: number;
  @IsString()
  status: string;
  @IsString()
  message: string;
}
