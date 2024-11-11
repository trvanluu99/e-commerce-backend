import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  quantity_in_stock: number;

  @Column()
  unit_perchase_price: number;

  @Column()
  unit_sale_price: number;

  @Column()
  measure_unit: string;

  @Column()
  image_url: string;
}
