import { IsBoolean, IsObject } from 'class-validator';
import { PushMenuRequest } from '../../requests/PushMenuRequest.js';

export class FetchMenuResponse {
  @IsBoolean()
  success: boolean;

  @IsObject()
  result: PushMenuRequest;
}
