import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @ApiProperty({example: "user@mail.ru", description: "Email пользователя"})
  @Prop({required: true, unique: true})
  email: string;

  @ApiProperty({example: "Доменик", description: "Имя пользователя"})
  @Prop({required: true})
  name: string

  @ApiProperty({example: "qwe123ewq", description: "Пароль пользователя"})
  @Prop({required: true})
  password: string

  @ApiProperty({example: "Developer", description: "Роль пользователя"})
  @Prop({required: true})
  roles: string
}

export const UserSchema = SchemaFactory.createForClass(Users)