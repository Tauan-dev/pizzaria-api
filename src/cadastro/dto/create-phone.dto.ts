import { IsNumber, IsString } from 'class-validator';

export class CreatePhoneDTO {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly type: string;

  @IsString()
  readonly ddd: string;

  @IsString()
  readonly number: string;
}
