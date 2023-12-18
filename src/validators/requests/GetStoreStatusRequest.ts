import { IsString } from 'class-validator';

export class GetStoreStatusRequest {
  @IsString()
  restID: string;
}
