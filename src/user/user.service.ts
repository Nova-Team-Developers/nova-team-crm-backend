import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {genSalt, hashSync} from 'bcryptjs';
import {Repository} from 'typeorm';
import {CreateStudentDto} from './dto/user.dto';
import {User} from './entity/abstractuser.entity';
import {Manager} from './entity/manager.entity';
import {Mentor} from './entity/mentor.entity';
import {Student} from './entity/student.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Student) private studentRepository: Repository<Student>,
    @InjectRepository(Mentor) private mentorRepository: Repository<Mentor>,
    @InjectRepository(Manager) private managerRepository: Repository<Manager>,
  ) {}

  async getByEmail(email: string) {
    return await this.studentRepository.findOne({where: {email}});
  }

  async createUser(createStudentDto: CreateStudentDto) {
    const existUser = await this.getByEmail(createStudentDto.email);
    if (existUser) {
      throw new BadRequestException('This email already exist');
    }
    const salt = await genSalt();
    const newUser = this.studentRepository.create({
      email: createStudentDto.email,
      passwordHash: hashSync(createStudentDto.password, salt),
      firstName: createStudentDto.firstName,
    });
    return await this.studentRepository.save(newUser);
  }

  async findAll() {
    return await this.studentRepository.find();
  }
}
