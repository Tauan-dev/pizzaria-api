import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Order } from 'src/pizzaria/entities/order.entity';

@Entity('adress')
export class Adress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  complement: string;

  @Column()
  bairro: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  cep: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.adress)
  user: User;

  @OneToMany(() => Order, (order) => order.adress, {
    cascade: true,
  })
  order: Order;
}
