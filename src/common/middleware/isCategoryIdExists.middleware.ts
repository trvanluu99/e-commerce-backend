import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from 'src/categories/category.entity';

@Injectable()
export class IsCategoryIdExists implements NestMiddleware {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const id = req.body.category_id;

    if (isNaN(id)) {
      throw new NotFoundException('Invalid category_id format.');
    }

    const categoryExists = await this.categoryRepository.findOne({
      where: { id },
    });

    if (!categoryExists) {
      throw new NotFoundException(`Category with ID ${id} does not exist.`);
    }

    next();
  }
}
