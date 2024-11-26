import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './cart.entity';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartsRepository: Repository<Cart>,
  ) {}

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    let cart = new Cart();

    cart.quantity = createCartDto.quantity;
    cart.user_id = createCartDto.user_id;
    cart.product_id = createCartDto.product_id;

    return await this.cartsRepository.save(cart);
  }

  async findAll(): Promise<Cart[]> {
    return await this.cartsRepository.find({
      relations: ['user', 'product'],
    });
  }
}
