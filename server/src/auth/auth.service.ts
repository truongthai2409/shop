import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto, RegisterDto, AuthResponse } from './dto/auth.dto';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(UserData: LoginDto): Promise<AuthResponse> {
    const { username, password } = UserData;
    const user = await this.usersService.findByUsername(username);

    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.FORBIDDEN);
    }

    const hashPassword = user.password;
    const isMatch = await comparePassword(password, hashPassword);

    if (!isMatch) {
      throw new HttpException('Invalid credentials', HttpStatus.FORBIDDEN);
    }

    const payload = { username: user.username, sub: user._id };
    const access_token = this.jwtService.sign(payload, { expiresIn: '15m' });
    const refresh_token = this.jwtService.sign(payload, { expiresIn: '7d' });

    await this.usersService.saveRefreshToken(user._id.toString(), refresh_token);

    return {
      user_id: user._id,
      access_token,
      refresh_token,
      message: 'Login successful',
    };
  }

  async register(UserData: RegisterDto): Promise<AuthResponse> {
    const { username, phone, email, password, status } = UserData;

    const existingUserByEmail = await this.usersService.findByEmail(email);
    if (existingUserByEmail) {
      throw new ConflictException('Email already exists');
    }

    const existingUsername = await this.usersService.findByUsername(username);
    if (existingUsername) {
      throw new ConflictException('Username already exists');
    }

    const existingPhone = await this.usersService.findByPhone(phone);
    if (existingPhone) {
      throw new ConflictException('Phone number already exists');
    }

    const newUser = await this.usersService.create(
      username,
      phone,
      email,
      password,
      status,
    );

    const payload = { email: newUser.email, sub: newUser._id };
    const access_token = this.jwtService.sign(payload, { expiresIn: '15m' });
    const refresh_token = this.jwtService.sign(payload, { expiresIn: '7d' });

    await this.usersService.saveRefreshToken(newUser._id.toString(), refresh_token);

    return {
      user_id: newUser._id,
      access_token,
      refresh_token,
      message: 'Registration successful',
    };
  }

  async refresh(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken);
      const user = await this.usersService.findById(payload.sub);

      if (!user || user.refreshToken !== refreshToken) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      const newAccessToken = this.jwtService.sign(
        { username: user.username, sub: user._id },
        { expiresIn: '15m' },
      );

      return {
        access_token: newAccessToken,
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async logout(userId: string) {
    await this.usersService.removeRefreshToken(userId);
    return { message: 'Logout successful' };
  }
}
