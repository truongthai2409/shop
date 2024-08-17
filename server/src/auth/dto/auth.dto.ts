import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'User name is required' })
  username: string;

  @IsNotEmpty({ message: 'Phone is required' })
  @MinLength(10, {
    message: 'Phone number must be at least 10 characters long',
  })
  @Matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, {
    message: 'Phone number must be a valid Vietnamese phone number',
  })
  phone: string;

  @IsNotEmpty({ message: 'Email is required' })
  @Matches(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    { message: 'Email incorrect' },
  )
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;

  status: string;
}
export class LoginDto {
  @IsNotEmpty({ message: 'User name is required' })
  username: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
export class AuthResponse {
  user_id: Object;
  access_token: string;
  refresh_token: string;
  message: string;
}
