import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { RegisterUsersDto } from './dto/register-user.dto';
import { Users } from 'src/users/users.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async login(loginDto: LoginDto): Promise<any> {
    const { email, password } = loginDto;

    const user = await this.prismaService.users.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException('user not found');
    }

    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) {
      throw new NotFoundException('Invalid password');
    }

    const token = this.jwtService.sign({ email });

    return { user, token };
  }

  async register(createDto: RegisterUsersDto): Promise<any> {
    const createUser = new Users();
    createUser.email = createDto.email;
    createUser.username = createDto.username;
    createUser.password = await bcrypt.hash(createDto.password, 10);
    if (!createDto.profile_picture) {
      createUser.profile_picture =
        'https://www.svgrepo.com/show/532363/user-alt-1.svg';
    }
    const user = await this.usersService.createUser(createUser);

    return {
      token: this.jwtService.sign({ email: user.email }),
    };
  }
}
