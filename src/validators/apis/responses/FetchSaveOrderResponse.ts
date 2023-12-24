import { IsBoolean, IsObject } from 'class-validator';
import { SaveOrderRequest } from '../../requests/SaveOrderRequest.js';

export class FetchSaveOrderResponse {
  @IsBoolean()
  success: boolean;

  @IsObject()
  result: SaveOrderRequest;
}
