import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUsersDto } from './dto/crateUsersDto';
import { UsersService } from './users.service';
import { Users } from './users.schema';

@ApiTags( 'Пользователи')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  
  @Post()
  @ApiOperation({summary: 'Создание пользователя'})
  @ApiResponse({status: 200, type: Users})
  create(@Body() userDto: CreateUsersDto) {
    return this.userService.createUser(userDto);
  }

  @Get()
  @ApiOperation({summary: 'Получение пользователей'})
  @ApiResponse({status: 200, type: [Users]})
  getAll(){
    return this.userService.getAllUsers()
  }
}
