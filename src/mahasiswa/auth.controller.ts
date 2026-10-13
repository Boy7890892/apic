import { Controller, Post, Body } from '@nestjs/common';
import { RegisterDto } from '../dto/register.dto.js'; // Sesuaikan lokasi DTO Anda

@Controller() // Atau @Controller('auth') jika ingin URL: /auth/register
export class AuthController {

  @Post('register') // <-- Ini mendaftarkan endpoint POST /register
  register(@Body() registerDto: RegisterDto) {
    return {
      message: 'Registrasi berhasil!',
      data: registerDto,
    };
  }
}