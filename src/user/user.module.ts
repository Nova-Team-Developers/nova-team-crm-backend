import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './entity/abstractuser.entity';
import {Manager} from './entity/manager.entity';
import {Mentor} from './entity/mentor.entity';
import {Student} from './entity/student.entity';
import {UserController} from './user.controller';
import {UserService} from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Student]),
    TypeOrmModule.forFeature([Mentor]),
    TypeOrmModule.forFeature([Manager]),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
