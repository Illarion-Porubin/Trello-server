import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUsersDto } from './dto/crateUsersDto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  
  @Post()
  create(@Body() userDto: CreateUsersDto) {
    return this.userService.createUser(userDto);
  }

  @Get()
  getAll(){
    return this.userService.getAllUsers()
  }
}
