import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todosRepository: Repository<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = new Todo();
    todo.name = createTodoDto.name;
    todo.isDone = createTodoDto.isDone;

    return await this.todosRepository.save(todo);
  }

  async findAll(): Promise<Todo[]> {
    return await this.todosRepository.find();
  }

  async findOne(id: number): Promise<Todo> {
    return await this.todosRepository.findOneBy({ id: id });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const todo = await this.todosRepository.findOneBy({ id: id });

    todo.name = updateTodoDto.name;
    todo.isDone = updateTodoDto.isDone;

    return await this.todosRepository.save(todo);
  }

  async remove(id: number): Promise<Todo> {
    const todo = await this.todosRepository.findOneBy({ id: id });
    await this.todosRepository.delete(id);
    return todo;
  }
}
