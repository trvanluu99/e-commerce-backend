import { IsString, IsBoolean } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  name: string;

  @IsBoolean()
  isDone: boolean;
}
