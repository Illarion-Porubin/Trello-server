import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop()
  email: string;

  @Prop()
  name: string

  @Prop()
  password: string

  @Prop()
  roles: string
}

export const UserSchema = SchemaFactory.createForClass(Users)