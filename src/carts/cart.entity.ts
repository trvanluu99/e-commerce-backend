import { Expose, Exclude } from 'class-transformer';
import { Product } from 'src/products/product.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Cart {
  // Attributes
  @Column()
  @Expose()
  public quantity: number;

  @PrimaryColumn()
  @Expose()
  public user_id: number;

  @PrimaryColumn()
  @Expose()
  public product_id: number;

  // Relationships
  @ManyToOne(() => User, (user) => user.carts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  public user: User;

  @ManyToOne(() => Product, (product) => product.carts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_id' })
  public product: Product;
}
