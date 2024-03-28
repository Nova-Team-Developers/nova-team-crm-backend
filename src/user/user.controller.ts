import {Body, Controller, Get, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {CreateStudentDto} from './dto/user.dto';
import {UserService} from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(ValidationPipe)
  @Post('create')
  async create(@Body() сreateStudentDto: CreateStudentDto) {
    return await this.userService.createUser(сreateStudentDto);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }
}
