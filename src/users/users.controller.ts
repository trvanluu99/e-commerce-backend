import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Public } from 'src/common/decorator/public.decorator';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // Set this route public for testing
  @Public()
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // Set this route public for testing
  @Public()
  @Delete(':id')
  delete(@Param('id') id: number): Promise<User> {
    return this.usersService.delete(id);
  }
}
