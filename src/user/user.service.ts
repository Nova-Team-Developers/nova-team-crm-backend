import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async findAll() {
    return await this.userRepository.find()
  }

  async createUser(createUserDto: CreateUserDto) {
    const newUser =  this.userRepository.create(createUserDto)
    return await this.userRepository.save(newUser)
  }
}
