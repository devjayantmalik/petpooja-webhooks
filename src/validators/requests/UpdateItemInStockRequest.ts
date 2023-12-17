import { IsArray, IsBoolean, IsString } from 'class-validator';

export class UpdateItemInStockRequest {
  @IsString()
  restID: string;
  type: string;
  @IsBoolean()
  inStock: boolean;
  @IsArray()
  itemID: string[];
}
