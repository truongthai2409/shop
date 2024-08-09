import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { ExtractJwt } from 'passport-jwt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    private configService: ConfigService
  ) {
    super();  
  }
  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.login({ username, password });
    if (!user) {
      throw new UnauthorizedException('Invalid username or password');
    }
    return user;
  }
  
}