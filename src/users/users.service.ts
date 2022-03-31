import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Users, UsersDocument } from "./users.schema";
import { Model } from "mongoose";
import { CreateUsersDto } from './dto/crateUsersDto';
import { UsersDetails } from "./users-details-interface";



@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,) { }

  async createUser(dto: CreateUsersDto) {
    const user = await this.usersModel.create(dto)
    return user;
  }
  async getAllUsers() {
    const users = await this.usersModel.find()
    return users;
  }

  _getUserDetails(user: UsersDocument): UsersDetails {
    return {
      id: user._id,
      name: user.name,
      email: user.email,
    }
  }

  async findByEmail(email: string): Promise<UsersDocument | null> {
    return this.usersModel.findOne({email}).exec();
  }

  async findById(id: string): Promise<UsersDetails | null> {
    const user = await this.usersModel.findById(id).exec();
    if (!user) return null;
    return this._getUserDetails(user);
  }

  async create(name: string, email: string, hashedPassword: string): Promise<UsersDocument> {
    const newUser = new this.usersModel({
      name,
      email,
      password: hashedPassword
    });
    return newUser.save()
  }
}