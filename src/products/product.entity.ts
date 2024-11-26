import { Expose, Exclude } from 'class-transformer';
import { Category } from 'src/categories/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
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

  @ManyToOne(() => Category, (category) => category.products, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' })
  @Expose()
  category: Category;
}
