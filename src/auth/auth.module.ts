import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Student } from 'src/user/entity/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [AuthService, UserService],
  controllers: [AuthController]
})
export class AuthModule {}
