import { ApiProperty } from '@nestjs/swagger';

export class ExistingUserDTO {
  @ApiProperty({example: "user@mail.ru", description: "Email пользователя"})
  readonly email: string;
  @ApiProperty({example: "Доменик", description: "Имя пользователя"})
  readonly name: string;
  @ApiProperty({example: "qwe123ewq", description: "Пароль пользователя"})
  readonly password: string;
  @ApiProperty({example: "Developer", description: "Роль пользователя"})
  readonly role: string;
}