import { IsBoolean, IsObject } from 'class-validator';
import { UpdateItemOutOfStockRequest } from '../../requests/UpdateItemOutOfStockRequest.js';

export class FetchItemOutOfStockResponse {
  @IsBoolean()
  success: boolean;

  @IsObject()
  result: UpdateItemOutOfStockRequest;
}
