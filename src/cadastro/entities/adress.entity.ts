import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  // many to one (user)

  @Column()
  createdAt: Date;
}
