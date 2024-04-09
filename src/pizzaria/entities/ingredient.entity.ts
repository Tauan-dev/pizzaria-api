import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PizzaIngredient } from './pizza_ingredient.entity';

@Entity('ingredient')
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  currentInventory: number;

  @OneToMany(
    () => PizzaIngredient,
    (pizzaIngredient) => pizzaIngredient.ingredient,
  )
  pizzaIngredients: PizzaIngredient[];
}
