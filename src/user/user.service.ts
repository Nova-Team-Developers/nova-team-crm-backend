import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/user.dto';
import { Student } from './entity/student.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(Student) private userRepository: Repository<Student>) {}

  async createUser(createUserDto: CreateUserDto) {
    const newUser =  this.userRepository.create(createUserDto)
    return await this.userRepository.save(newUser)
  }

  async getByEmail(email: string) {
    return await this.userRepository.findOne({where: { email }})
  }

  
}
