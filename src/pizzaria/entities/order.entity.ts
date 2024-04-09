import { Adress } from 'src/cadastro/entities/adress.entity';
import { User } from 'src/cadastro/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { OrderPizza } from './pizza_order.entity';

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalOrder: number;

  @CreateDateColumn()
  dateHour: Date;

  @ManyToOne(() => User, (user) => user.order)
  user: User;

  @ManyToOne(() => Adress, (adress) => adress.order)
  adress: Adress;

  @OneToMany(() => OrderPizza, (orderPizza) => orderPizza.orders)
  @JoinColumn({ name: 'idOrder' })
  order_pizza: OrderPizza;
}
