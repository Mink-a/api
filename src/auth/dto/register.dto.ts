import { IsEmail, IsOptional, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  name: string;

  @IsString()
  password: string;
  @IsEmail()
  @IsOptional()
  email: string;
}
