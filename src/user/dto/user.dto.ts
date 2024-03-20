import { IsDate, IsEmail, IsPhoneNumber, IsStrongPassword, ValidateIf, IsString} from 'class-validator';

// export class UserDto {
//   @IsEmail()
//   email: string;

//   @IsStrongPassword()
//   passwordHash: string;

//   firstName: string;
  
//   lastName: string;

//   // @IsDate()
//   birthdayDate: Date;

//   @ValidateIf(obj => {
//     console.log(obj)
//     return obj && typeof obj.mobilePhone !== 'undefined';
//   })
//   @IsPhoneNumber('RU')
//   mobilePhone: string;

//   discord: string;

//   avatar: string;

//   description: string;

//   github: string;

//   projectIds: number;
// }

export class CreateUserDto {

  @IsEmail()
  email: string;
  
  @IsStrongPassword()
  passwordHash: string;

  @IsString()
  firstName: string;
}