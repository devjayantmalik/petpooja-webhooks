import { IsBoolean, IsInt, IsPositive, IsString } from 'class-validator';

export class PhonepePayRequest {
  @IsString()
  userId: string;

  @IsString()
  phoneNumber: string;

  @IsBoolean()
  isAndroid: boolean;

  @IsInt()
  @IsPositive()
  amount: number;
}
