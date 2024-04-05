import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CadastroController } from './cadastro.controller';
import { CadastroService } from './cadastro.service';
import { Adress } from './entities/adress.entity';
import { Telephone } from './entities/telephone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Adress, Telephone])],
  controllers: [CadastroController],
  providers: [CadastroService],
  exports: [
    CadastroService,
    TypeOrmModule.forFeature([User, Adress, Telephone]),
  ],
})
export class CadastroModule {}
