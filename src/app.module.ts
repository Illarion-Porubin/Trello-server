import set from "../set"
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${set.SET_LOGIN}:${set.SET_PASSWORD}@cluster0.dsbkl.mongodb.net/${set.SET_NAME_DB}?retryWrites=true&w=majority`),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
