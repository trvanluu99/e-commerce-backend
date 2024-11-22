import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
import { ResponseDto } from 'src/common/dto/response.dto';
import { plainToInstance } from 'class-transformer';
import { API_CONSTANT } from 'src/common/constant/api.constant';
import { UpdateProductDto } from './dto/update-product.dto';
import { Paging } from 'src/common/dto/paging.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
  ): Promise<ResponseDto<Product>> {
    const createdProduct = await this.productsService.create(createProductDto);
    return {
      message: API_CONSTANT.RESPONSE_MESSAGE.CREATE_DATA_SUCCESSFULLY,
      data: plainToInstance(Product, createdProduct),
    };
  }

  @Get()
  async findAll(@Query() query: Paging): Promise<ResponseDto<Product[]>> {
    const products = await this.productsService.findAll();
    return {
      message: API_CONSTANT.RESPONSE_MESSAGE.GET_DATA_SUCCESSFULLY,
      data: plainToInstance(Product, products),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ResponseDto<Product>> {
    const product = await this.productsService.findOne(id);
    return {
      message: API_CONSTANT.RESPONSE_MESSAGE.GET_DATA_SUCCESSFULLY,
      data: plainToInstance(Product, product),
    };
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<ResponseDto<Product>> {
    const updatedProduct = await this.productsService.update(
      id,
      updateProductDto,
    );
    return {
      message: API_CONSTANT.RESPONSE_MESSAGE.UPDATE_DATA_SUCCESSFULLY,
      data: plainToInstance(Product, updatedProduct),
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<ResponseDto<Product>> {
    const deletedProduct = await this.productsService.remove(id);
    return {
      message: API_CONSTANT.RESPONSE_MESSAGE.DELETE_DATA_SUCCESSFULLY,
      data: plainToInstance(Product, deletedProduct),
    };
  }
}
