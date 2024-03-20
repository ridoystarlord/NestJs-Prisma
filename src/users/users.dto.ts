import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'This role is not valid',
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
