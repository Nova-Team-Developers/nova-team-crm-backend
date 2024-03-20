import { IsEmail, IsStrongPassword, IsString} from 'class-validator';

export class AuthDto {

  @IsEmail()
  email: string;
  
  @IsStrongPassword()
  password: string;

  @IsString()
  firstName: string;
}