import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { IsCategoryIdExists } from 'src/common/middleware/isCategoryIdExists.middleware';
import { Category } from 'src/categories/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category])], // Define 'Category' for the middleware
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IsCategoryIdExists)
      .forRoutes({ path: 'products', method: RequestMethod.POST });
  }
}
