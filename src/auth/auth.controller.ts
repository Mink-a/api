import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local.guard';
import { User } from 'src/common/decorator/user.decorator';
import { type User as PrismaUser } from '@prisma/client';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@User() user: PrismaUser) {
    return this.authService.login(user);
  }

  @Post('/register')
  async register(@Body() user: RegisterDto) {
    return this.authService.register(user);
  }
}
