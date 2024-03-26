import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateStudentDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(ValidationPipe)
  @Post('create')
  async create(@Body() CreateStudentDto: CreateStudentDto) {
    return await this.userService.createUser(CreateStudentDto)
  }

  @Get()
  async findAll() {
    return await this.userService.findAll()
  }
}
