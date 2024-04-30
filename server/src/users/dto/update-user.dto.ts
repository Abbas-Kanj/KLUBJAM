import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  username?: string;
  email?: string;
  password?: string;
  role_id?: number;
  profile_picture?: string;
  fullname?: string;
  biography?: string;
  phone_number?: number;
  country?: string;
  balance?: number;
  date_of_birth?: string;
  status?: string;
}
