import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.name = createUserDto.name;
    user.role = createUserDto.role;

    return await this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(username: string): Promise<User> {
    return await this.usersRepository.findOneBy({ username: username });
  }

  async delete(id: number): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id: id });
    await this.usersRepository.delete(id);
    return user;
  }
}
