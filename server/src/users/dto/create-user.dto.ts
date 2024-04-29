import {
  IsString,
  IsEmail,
  IsOptional,
  IsInt,
  IsDateString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsOptional()
  @IsInt()
  role_id?: number;
  @IsOptional()
  @IsString()
  profile_picture?: string;
  @IsOptional()
  @IsString()
  fullname?: string;
  @IsOptional()
  @IsString()
  biography?: string;
  @IsOptional()
  @IsInt()
  phone_number?: number;
  @IsOptional()
  @IsString()
  country?: string;
  @IsOptional()
  @IsInt()
  balance?: number;
  @IsOptional()
  @IsDateString()
  date_of_birth?: string;
  @IsOptional()
  @IsString()
  status?: string;
}
