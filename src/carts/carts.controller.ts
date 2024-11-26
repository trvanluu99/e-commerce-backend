import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { Cart } from './cart.entity';
import { ResponseDto } from 'src/common/dto/response.dto';
import { plainToInstance } from 'class-transformer';
import { API_CONSTANT } from 'src/common/constant/api.constant';
import { Paging } from 'src/common/dto/paging.dto';

@Controller('carts')
export class CartsController {
  constructor(private cartsService: CartsService) {}

  @Post()
  async create(
    @Body() createCartDto: CreateCartDto,
  ): Promise<ResponseDto<Cart>> {
    const createdCart = await this.cartsService.create(createCartDto);
    return {
      message: API_CONSTANT.RESPONSE_MESSAGE.CREATE_DATA_SUCCESSFULLY,
      data: plainToInstance(Cart, createdCart),
    };
  }

  @Get()
  async findAll(@Query() query: Paging): Promise<ResponseDto<Cart[]>> {
    const carts = await this.cartsService.findAll();
    return {
      message: API_CONSTANT.RESPONSE_MESSAGE.GET_DATA_SUCCESSFULLY,
      data: plainToInstance(Cart, carts),
    };
  }
}
