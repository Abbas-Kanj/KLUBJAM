import { PrismaService } from 'src/prisma.service';

import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { Projects } from '@prisma/client';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllProjects(): Promise<Projects[]> {
    return this.prisma.projects.findMany();
  }

  async getPersonalProjectsByUserId(creator_id: number): Promise<any> {
    return this.prisma.projects.findMany({
      where: {
        creator_id: creator_id,
        type: 'Personal',
      },
    });
  }

  async getGroupProjectsByUserId(userId: number): Promise<any> {
    return this.prisma.projects.findMany({
      where: {
        OR: [
          {
            creator_id: userId,
            type: 'Group',
          },
          {
            collaborators: {
              some: {
                collaborator_id: userId,
              },
            },
            type: 'Group',
          },
        ],
      },
    });
  }

  async createProject(data: CreateProjectDto, creatorId: number) {
    const projectData = {
      project_name: data.project_name,
      type: data.type,
      description: data.description,
      privacy: data.privacy,
      creator: { connect: { id: creatorId } },
    };

    const collaborators =
      data.type === 'Group'
        ? data.collaborators?.map((username) => ({
            slice_name: '',
            slice_audio: '',
            duration: '',
            collaborators: {
              connect: {
                username: username.toString(),
              },
            },
          }))
        : [];

    const project = await this.prisma.projects.create({
      data: {
        ...projectData,
        collaborators: {
          create: collaborators,
        },
      },
    });

    return project;
  }
}
