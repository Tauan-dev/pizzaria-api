import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastroController } from './cadastro/cadastro.controller';
import { PizzariaController } from './pizzaria/pizzaria.controller';
import { CadastroService } from './cadastro/cadastro.service';
import { CadastroModule } from './cadastro/cadastro.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CadastroModule, DatabaseModule],
  controllers: [AppController, CadastroController, PizzariaController],
  providers: [AppService, CadastroService],
})
export class AppModule {}
