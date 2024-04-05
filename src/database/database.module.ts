import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adress } from 'src/cadastro/entities/adress.entity';
import { Telephone } from 'src/cadastro/entities/telephone.entity';
import { User } from 'src/cadastro/entities/user.entity';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: 'tauan198',
  database: 'pizzaria_nest',
  entities: [User, Adress, Telephone],
  synchronize: false,
};

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          ...dataSourceOptions,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
