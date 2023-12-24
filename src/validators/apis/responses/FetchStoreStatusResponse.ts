import { IsBoolean, IsObject } from 'class-validator';
import { UpdateStoreStatusRequest } from '../../requests/UpdateStoreStatusRequest.js';

export class FetchStoreStatusResponse {
  @IsBoolean()
  success: boolean;

  @IsObject()
  result: UpdateStoreStatusRequest;
}
