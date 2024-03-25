import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { Student } from './entity/student.entity';
import { User } from './entity/abstractuser.entity';
import { Mentor } from './entity/mentor.entity';
import { Manager } from './entity/manager.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Student]),
    TypeOrmModule.forFeature([Mentor]),
    TypeOrmModule.forFeature([Manager])
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
