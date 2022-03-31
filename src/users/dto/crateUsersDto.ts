import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersDto {

  @ApiProperty({example: "Доменик", 
  description: "Имя пользователя"})
  readonly name: string

  @ApiProperty({example: "user@mail.ru", 
  description: "Email пользователя"})
  readonly email: string;

  @ApiProperty({example: "qwe123ewq", 
  description: "Пароль пользователя"})
  readonly password: string;
}