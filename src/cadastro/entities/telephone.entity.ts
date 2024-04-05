import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('telephone')
export class Telephone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  ddd: string;

  @Column()
  number: string;

  @ManyToOne(() => User, (user) => user.telephone)
  user: User;
}
