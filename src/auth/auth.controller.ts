import { Body, Controller, Post } from '@nestjs/common';
import { CreateUsersDto } from 'src/users/dto/crateUsersDto';
import { AuthService } from './auth.service';
import { UsersDetails } from '../users/users-details-interface'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('register')
  register(@Body() user: CreateUsersDto): Promise<UsersDetails | null> {
    return this.authService.register(user);
  }
}
