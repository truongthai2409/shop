import { Controller, Post, UseGuards, Body, Get, Req, ValidationPipe, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
// import { LocalAuthGuard } from './guards/local-auth.guard';
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
// import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  // async login(@Req() req: Request) {
  //   return req.user
  // }
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto)
  }

  // @UseGuards(LocalAuthGuard)
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('refresh_token')
  async refresh(@Body('refresh_token') refreshToken: string){
    return this.authService.refresh(refreshToken);
  }

  @Post('logout')
  async logout(@Body('user_id') userId: string) {
    return this.authService.logout(userId);
  }
  
}
