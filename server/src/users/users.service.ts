import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { hashPassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  
  async findByUsername(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username }).exec();
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email }).exec();
  }

  async findByPhone(phone: string): Promise<User | undefined> {
    return this.userModel.findOne({ phone }).exec();
  }

  async create(
    username: string,
    phone: string,
    email: string,
    password: string,
    status: string,
  ): Promise<User> {
    const hashedPassword = await hashPassword(password);
    const newUser = new this.userModel({
      username,
      phone,
      email,
      password: hashedPassword,
      status,
    });
    return newUser.save();
  }

  // Method to find a user by their ID
  async findById(id: string): Promise<User | undefined> {
    return this.userModel.findById(id).exec();
  }

  // Method to save or update the refresh token for a user
  async saveRefreshToken(userId: string, refreshToken: string): Promise<void> {
    await this.userModel.findByIdAndUpdate(userId, { refreshToken }).exec();
  }

  // Method to remove the refresh token (e.g., during logout)
  async removeRefreshToken(userId: string): Promise<void> {
    await this.userModel.findByIdAndUpdate(userId, { $unset: { refreshToken: 1 } }).exec();
  }
}
