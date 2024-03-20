import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { Student } from './entity/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
