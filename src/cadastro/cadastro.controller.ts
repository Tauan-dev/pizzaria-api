import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CadastroService } from './cadastro.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('cadastro')
export class CadastroController {
  constructor(private readonly cadastroService: CadastroService) {}

  @Get('userlist')
  findAll() {
    return this.cadastroService.findAllUser();
  }

  @Get('user/:cpf')
  findOne(@Param('cpf') cpf: string) {
    return this.cadastroService.findOne(cpf);
  }

  @Post()
  create(@Body() CreateUser: CreateUserDTO) {
    return this.cadastroService.create(CreateUser);
  }

  @Put('updateuser/:cpf')
  update(@Param('cpf') cpf: string, @Body() UpdateUser: UpdateUserDTO) {
    return this.cadastroService.update(cpf, UpdateUser);
  }

  @Delete()
  delete(@Param('cpf') cpf: string) {
    return this.cadastroService.delete(cpf);
  }
}
