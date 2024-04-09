import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adress } from 'src/cadastro/entities/adress.entity';
import { Telephone } from 'src/cadastro/entities/telephone.entity';
import { User } from 'src/cadastro/entities/user.entity';
import { Ingredient } from 'src/pizzaria/entities/ingredient.entity';
import { Order } from 'src/pizzaria/entities/order.entity';
import { Pizza } from 'src/pizzaria/entities/pizza.entity';
import { PizzaIngredient } from 'src/pizzaria/entities/pizza_ingredient.entity';
import { OrderPizza } from 'src/pizzaria/entities/pizza_order.entity';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: 'tauan198',
  database: 'pizzaria_nest',
  entities: [
    User,
    Adress,
    Telephone,
    Order,
    Ingredient,
    Pizza,
    PizzaIngredient,
    OrderPizza,
  ],
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
