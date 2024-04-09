// pizza.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PizzaIngredient } from './pizza_ingredient.entity';
import { OrderPizza } from './pizza_order.entity';


@Entity('pizza')
export class Pizza {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @OneToMany(() => PizzaIngredient, (pizzaIngredient) => pizzaIngredient.pizza)
  pizzaIngredients: PizzaIngredient[];

  // Adicionado para estabelecer relação com OrderPizza
  @OneToMany(() => OrderPizza, (orderPizza) => orderPizza.pizza)
  orderPizzas: OrderPizza[];
}
