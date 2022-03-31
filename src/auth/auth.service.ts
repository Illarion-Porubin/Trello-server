import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { UsersDetails } from 'src/users/users-details-interface';
import { UsersService } from 'src/users/users.service';
import { CreateUsersDto } from '../users/dto/crateUsersDto'


@Injectable()
export class AuthService {
  constructor(private usersService: UsersService){}

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12)
  }

  async register(user: Readonly<CreateUsersDto>): Promise<UsersDetails | any> {
    const{ name, email, password } = user;

    const existingUser = await this.usersService.findByEmail(email)

    if (existingUser) return 'Email taken!';

    const hashedPassword = await this.hashPassword(password);

    const newUser = await this.usersService.create(name, email, hashedPassword)
    return this.usersService._getUserDetails(newUser);
  }
}
