import { Expose, Exclude } from 'class-transformer';
import { Cart } from 'src/carts/cart.entity';
import { Category } from 'src/categories/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  // Attributes
  @PrimaryGeneratedColumn()
  @Expose()
  id: number;

  @Column({ unique: true })
  @Expose()
  name: string;

  @Column()
  @Expose()
  quantity_in_stock: number;

  @Column()
  @Expose()
  unit_purchase_price: number;

  @Column()
  @Expose()
  unit_sale_price: number;

  @Column()
  @Expose()
  measure_unit: string;

  @Column()
  @Expose()
  image_url: string;

  @Column({ nullable: true })
  @Exclude()
  category_id: number | null;

  // Relationships
  @ManyToOne(() => Category, (category) => category.products, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(() => Cart, (cart) => cart.product)
  carts: Cart[];
}
