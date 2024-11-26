import { IsNumber } from 'class-validator';

export class CreateCartDto {
  @IsNumber()
  quantity: number;

  @IsNumber()
  user_id: number;

  @IsNumber()
  product_id: number;
}
