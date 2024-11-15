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
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ListAllEntities } from './dto/list-all-entities.dto';
import { TodosService } from './todos.service';
import { Todo } from './todo.entity';
import { ResponseDto } from 'src/common/dto/response.dto';
import { plainToClass, plainToInstance } from 'class-transformer';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  async findAll(@Query() query: ListAllEntities): Promise<ResponseDto<Todo[]>> {
    // return this.todosService.findAll();
    const result = await this.todosService.findAll();
    return {
      message: 'Success!',
      data: plainToInstance(Todo, result),
    };
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.todosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.todosService.remove(id);
  }
}
