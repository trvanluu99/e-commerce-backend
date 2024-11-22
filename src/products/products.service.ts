import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

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
    product.unit_purchase_price = createProductDto.unit_purchase_price;
    product.unit_sale_price = createProductDto.unit_sale_price;
    product.measure_unit = createProductDto.measure_unit;
    product.image_url = createProductDto.image_url;

    return await this.productsRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return await this.productsRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    return await this.productsRepository.findOneBy({ id: id });
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const product = await this.productsRepository.findOneBy({ id: id });

    product.name = updateProductDto.name;
    product.quantity_in_stock = updateProductDto.quantity_in_stock;
    product.unit_purchase_price = updateProductDto.unit_purchase_price;
    product.unit_sale_price = updateProductDto.unit_sale_price;
    product.measure_unit = updateProductDto.measure_unit;
    product.image_url = updateProductDto.image_url;

    return await this.productsRepository.save(product);
  }

  async remove(id: number): Promise<Product> {
    const product = await this.productsRepository.findOneBy({ id: id });
    await this.productsRepository.delete(id);
    return product;
  }
}
