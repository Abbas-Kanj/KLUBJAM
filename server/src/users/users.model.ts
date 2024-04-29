import { Prisma } from '@prisma/client';

export class Users implements Prisma.UsersCreateInput {
  username: string;
  email: string;
  password: string;
  profile_picture?: string;
  role_id?: number;
  fullname?: string;
  biography?: string;
  phone_number?: number;
  country?: string;
  balance: number;
  date_of_birth?: string;
  status: string;
}
