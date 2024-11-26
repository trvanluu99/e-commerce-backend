import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './category.entity';
import { ResponseDto } from 'src/common/dto/response.dto';
import { plainToInstance } from 'class-transformer';
import { API_CONSTANT } from 'src/common/constant/api.constant';
import { Paging } from 'src/common/dto/paging.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<ResponseDto<Category>> {
    const createdCategory =
      await this.categoriesService.create(createCategoryDto);
    return {
      message: API_CONSTANT.RESPONSE_MESSAGE.CREATE_DATA_SUCCESSFULLY,
      data: plainToInstance(Category, createdCategory),
    };
  }

  @Get()
  async findAll(@Query() query: Paging): Promise<ResponseDto<Category[]>> {
    const categories = await this.categoriesService.findAll();
    return {
      message: API_CONSTANT.RESPONSE_MESSAGE.GET_DATA_SUCCESSFULLY,
      data: plainToInstance(Category, categories),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ResponseDto<Category>> {
    const category = await this.categoriesService.findOne(id);
    return {
      message: API_CONSTANT.RESPONSE_MESSAGE.GET_DATA_SUCCESSFULLY,
      data: plainToInstance(Category, category),
    };
  }
}
