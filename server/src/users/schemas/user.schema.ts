import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { hash, compare } from 'bcrypt';
import * as bcrypt from 'bcrypt';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  phone: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
  
  @Prop({ required: true })
  status: string;

  @Prop() // No need for `required` or `unique` constraints
  refreshToken?: string;

  // So sánh mật khẩu
  // async comparePassword(password: string): Promise<boolean> {
  //   return compare(password, this.password);
  // }
}

export const UserSchema = SchemaFactory.createForClass(User);

// Mã hóa mật khẩu trước khi lưu
// UserSchema.pre<User>('save', async function (next) {
//   if (this.isModified('password') || this.isNew) {
//     try {
//       const salt = await bcrypt.genSalt(10);
//       const hash = await bcrypt.hash(this.password, salt);
//       this.password = hash;
//       next();
//     } catch (err) {
//       next(err);
//     }
//   } else {
//     next();
//   }
// });

// // Thêm phương thức comparePassword vào prototype
// UserSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
//   return compare(password, this.password);
// };
