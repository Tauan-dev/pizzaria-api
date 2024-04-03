import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CadastroController } from './cadastro.controller';
import { CadastroService } from './cadastro.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [CadastroController],
  providers: [CadastroService],
  exports: [CadastroService, TypeOrmModule.forFeature([User])],
})
export class CadastroModule {}
