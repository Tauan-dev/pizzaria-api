import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Ingredient } from './entities/ingredient.entity';
import { Pizza } from './entities/pizza.entity';
import { PizzaIngredient } from './entities/pizza_ingredient.entity';
import { OrderPizza } from './entities/pizza_order.entity';
import { PizzariaController } from './pizzaria.controller';
import { PizzariaService } from './pizzaria.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order,
      Ingredient,
      Pizza,
      PizzaIngredient,
      OrderPizza,
    ]),
  ],
  controllers: [PizzariaController],
  providers: [PizzariaService],
  exports: [
    PizzariaService,
    TypeOrmModule.forFeature([
      Order,
      Ingredient,
      Pizza,
      PizzaIngredient,
      OrderPizza,
    ]),
  ],
})
export class PizzariaModule {}
