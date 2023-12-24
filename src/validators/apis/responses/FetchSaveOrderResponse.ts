import { IsBoolean, IsObject } from 'class-validator';
import { OrderCallbackRequest } from '../../requests/OrderCallbackRequest.js';

export class FetchSaveOrderResponse {
  @IsBoolean()
  success: boolean;

  @IsObject()
  result: OrderCallbackRequest;
}
