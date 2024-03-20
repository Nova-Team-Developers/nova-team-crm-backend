import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import {genSalt, hashSync} from 'bcryptjs'
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(authDto: AuthDto) {
    const salt = await genSalt();
    const newStudent = this.userService.createUser({
      email: authDto.email,
      passwordHash: hashSync(authDto.password, salt),
      firstName: authDto.firstName
    })
    return newStudent;
  }

  async findUser(email: string) {
    return this.userService.getByEmail(email)
  }
}
