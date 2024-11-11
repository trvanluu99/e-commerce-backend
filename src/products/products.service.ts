import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    let product = new Product();

    product.name = createProductDto.name;
    product.quantity_in_stock = createProductDto.quantity_in_stock;
    product.unit_perchase_price = createProductDto.unit_perchase_price;
    product.unit_sale_price = createProductDto.unit_sale_price;
    product.measure_unit = createProductDto.measure_unit;
    product.image_url = createProductDto.image_url;

    return await this.productsRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return await this.productsRepository.find();
  }
}
