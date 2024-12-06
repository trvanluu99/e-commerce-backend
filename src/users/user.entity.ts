import { Cart } from 'src/carts/cart.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  // Attributes
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  role: string;

  @Column()
  birth_day: string;

  @Column()
  gender: string;

  @Column()
  phone_number: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  // Relationships
  @OneToMany(() => Cart, (cart) => cart.user)
  carts: Cart[];
}
