import { IsEmail, IsStrongPassword, IsString} from 'class-validator';

export class CreateStudentDto {

  @IsEmail()
  email: string;
  
  @IsStrongPassword()
  password: string;

  @IsString()
  firstName: string;
}