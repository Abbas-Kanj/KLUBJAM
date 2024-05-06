import { PrismaService } from 'src/prisma.service';

import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async getProjectsByUserId(userId: number): Promise<any> {
    return this.prisma.projects.findMany({
      where: {
        id: userId,
      },
    });
  }
}
