import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

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
}
