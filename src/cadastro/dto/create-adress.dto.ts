import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateAdressDTO {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly type: string;

  @IsString()
  readonly street: string;

  @IsNumber()
  readonly number: number;

  @IsString()
  readonly complement: string;

  @IsString()
  readonly bairro: string;

  @IsString()
  readonly city: string;

  @IsString()
  readonly state: string;

  @IsString()
  readonly cep: string;

  @IsDate()
  readonly createdAt: Date;
}
