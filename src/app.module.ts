import { Module } from '@nestjs/common';
import { AuthController } from './mahasiswa/auth.controller.js';// Import controller Anda

@Module({
  imports: [],
  controllers: [AuthController], // <-- Tambahkan di sini
  providers: [],
})
export class AppModule {}