import { IsBoolean, IsObject } from 'class-validator';
import { UpdateItemInStockRequest } from '../../requests/UpdateItemInStockRequest.js';

export class FetchItemInStockResponse {
  @IsBoolean()
  success: boolean;

  @IsObject()
  result: UpdateItemInStockRequest;
}
