import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsEmail, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'This role is not valid',
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
