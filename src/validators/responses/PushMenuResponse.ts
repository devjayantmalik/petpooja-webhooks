import { IsString } from 'class-validator';

export class PushMenuResponse {
  @IsString()
  'success': '1' | '0';

  @IsString()
  'message': string;
}
