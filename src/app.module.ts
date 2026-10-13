import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthController } from './mahasiswa/auth.controller.js';
import { MahasiswaController } from './mahasiswa/mahasiswa.controller.js'; // <-- 1. Import MahasiswaController

@Module({
  imports: [],
  controllers: [
    AppController, 
    AuthController,
    MahasiswaController // <-- 2. Daftarkan di sini agar route /mahasiswa aktif
  ],
  providers: [AppService],
})
export class AppModule {}