import { PrismaService } from 'src/prisma.service';

import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { Projects } from '@prisma/client';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async getPersonalProjectsByUserId(creator_id: number): Promise<any> {
    return this.prisma.projects.findMany({
      where: {
        creator_id: creator_id,
        type: 'Personal',
      },
    });
  }

  async createProject(
    createProjectDto: CreateProjectDto,
    creator_id: number,
  ): Promise<Projects> {
    const project = await this.prisma.projects.create({
      data: {
        ...createProjectDto,
        creator: {
          connect: {
            id: creator_id,
          },
        },
      },
    });
    return project;
  }
  catch(error) {
    console.error(error);
    throw new Error('An error occurred creating the post');
  }
}
