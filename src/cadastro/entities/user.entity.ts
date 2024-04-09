import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Adress } from './adress.entity';
import { Telephone } from './telephone.entity';
import { Order } from 'src/pizzaria/entities/order.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  cpf: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @OneToMany(() => Adress, (adress) => adress.user, {
    cascade: true,
  })
  adress: Adress[];

  @OneToMany(() => Telephone, (telephone) => telephone.user, {
    cascade: true,
  })
  telephone: Telephone[];

  @OneToMany(() => Order, (order) => order.user, {
    cascade: true,
  })
  order: Order;
}
