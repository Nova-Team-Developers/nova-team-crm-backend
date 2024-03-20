import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async singUp(@Body() authDto: AuthDto) {
    return await this.authService.register(authDto)
  }

  @HttpCode(200)
  @Post('signin')
  async singIn(@Body() authDto:AuthDto) {
    console.log(authDto.email)
    return await this.authService.findUser(authDto.email)
  }
}