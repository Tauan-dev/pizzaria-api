import { IsDate, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  readonly cpf: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsDate()
  readonly createdAt: Date;
}
