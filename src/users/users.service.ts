import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Users, UsersDocument } from "./users.schema";
import { Model } from "mongoose";
import { CreateUsersDto } from './dto/crateUsersDto';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
  ) {}
  // async create(createUsersDto: CreateUsersDto): Promise<Users> {
  //   createUsersDto.password = await bcrypt.hash(createUsersDto.password, 10);
  //   const createdUsers = new this.usersModel(createUsersDto);
  //   const ifUserExists = await this.findByUsername(createdUsers.username);
  //   if (!ifUserExists) {
  //     const result = createdUsers.save();
  //     return result;
  //   } else throw new Error('User allready exists');
  // }

  // async findByUsername(username: string) {
  //   return this.usersModel.findOne({ username });
  // }
  // async update(updateUsersDto: UpdateUsersDto) {
  //   return this.usersModel.findOneAndUpdate(updateUsersDto);
  // }
  // async remove(updateUsersDto: UpdateUsersDto) {
  //   return this.usersModel.findOneAndDelete(updateUsersDto);
  // }
}