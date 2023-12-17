import { IsArray, IsBoolean, IsString } from 'class-validator';

export class UpdateItemOutOfStockRequest {
  @IsString()
  restID: string;
  @IsString()
  type: string;
  @IsBoolean()
  inStock: boolean;
  @IsArray()
  itemID: string[];
  @IsString()
  autoTurnOnTime: string;
  @IsString()
  customTurnOnTime: string;
}
