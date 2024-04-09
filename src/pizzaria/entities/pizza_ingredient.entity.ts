import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Pizza } from './pizza.entity';
import { Ingredient } from './ingredient.entity';

@Entity('pizza_ingredient')
export class PizzaIngredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  necessaryQuantity: number;

  @ManyToOne(() => Pizza, (pizza) => pizza.pizzaIngredients) // Assumindo uma relação definida em Pizza
  @JoinColumn({ name: 'pizzaId' })
  pizza: Pizza;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.pizzaIngredients) // Assumindo uma relação definida em Ingredient
  @JoinColumn({ name: 'ingredientId' })
  ingredient: Ingredient;
}
