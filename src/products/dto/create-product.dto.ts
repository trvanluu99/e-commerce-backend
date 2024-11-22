import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  quantity_in_stock: number;

  @IsNumber()
  unit_purchase_price: number;

  @IsNumber()
  unit_sale_price: number;

  @IsString()
  measure_unit: string;

  @IsString()
  image_url: string;
}
