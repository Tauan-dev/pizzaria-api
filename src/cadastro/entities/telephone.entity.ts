import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  // many to one client
}
