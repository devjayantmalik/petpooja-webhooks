import { IsBoolean, IsObject } from 'class-validator';
import { UpdateOrderStatusRequest } from '../../requests/UpdateOrderStatusRequest.js';

export class FetchOrderStatusResponse {
  @IsBoolean()
  success: boolean;

  @IsObject()
  result: UpdateOrderStatusRequest;
}
