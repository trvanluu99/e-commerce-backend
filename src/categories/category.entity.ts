import { Expose, Exclude } from 'class-transformer';
import { Product } from 'src/products/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  // Attributes
  @PrimaryGeneratedColumn()
  @Expose()
  id: number;

  @Column({ unique: true })
  @Expose()
  name: string;

  // Relationships
  @OneToMany(() => Product, (product) => product.category, { cascade: true })
  products: Product[];
}
