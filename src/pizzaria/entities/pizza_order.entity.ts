import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Pizza } from './pizza.entity';
import { Order } from './order.entity';

@Entity('order_pizza')
export class OrderPizza {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  comments: string;

  @ManyToOne(() => Order, (order) => order.order_pizza)
  orders: Order;

  @ManyToOne(() => Pizza, (pizza) => pizza.orderPizzas)
  pizza: Pizza;
}
