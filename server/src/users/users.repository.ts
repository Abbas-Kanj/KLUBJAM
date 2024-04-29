import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async updateUser(id: number, data: Prisma.UsersUpdateInput): Promise<void> {
    await this.prisma.users.update({
      where: { id },
      data,
    });
  }
}
