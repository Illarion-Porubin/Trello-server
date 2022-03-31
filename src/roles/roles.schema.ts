import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UsersDocument = Roles & Document;

// interface RolesCreationAttrs {
//     role: string;
// }

@Schema()
export class Roles {
  @ApiProperty({example: "Developer", description: "Создание роли"})
  @Prop()
  role: string

}

export const UserSchema = SchemaFactory.createForClass(Roles)