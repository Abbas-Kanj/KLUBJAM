import {
  Body,
  Controller,
  Post,
  Res,
  Param,
  Get,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { JwtAuthGuard } from 'src/authentication/auth.guard';
import { ProjectsService } from './projects.service';
import { Projects } from '@prisma/client';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get('personalProjects/:id')
  async getPersonalProjects(@Param('id') id: string): Promise<any> {
    try {
      const userId = parseInt(id, 10);
      if (isNaN(userId)) {
        throw new Error('Invalid user ID');
      }
      const userPersonalProjects =
        await this.projectsService.getPersonalProjectsByUserId(userId);
      return {
        status: 'Ok!',
        message: 'Successfully fetched user personal projects!',
        result: userPersonalProjects,
      };
    } catch (error) {
      return {
        status: 'Error!',
        message: error.message || 'Controller error',
      };
    }
  }

  @Get('groupProjects/:id')
  async getGroupProjects(@Param('id') id: string): Promise<any> {
    try {
      const userId = parseInt(id, 10);
      if (isNaN(userId)) {
        throw new Error('Invalid user ID');
      }
      const userGroupProjects =
        await this.projectsService.getGroupProjectsByUserId(userId);
      return {
        status: 'Ok!',
        message: 'Successfully fetched user group projects!',
        result: userGroupProjects,
      };
    } catch (error) {
      return {
        status: 'Error!',
        message: error.message || 'Controller error',
      };
    }
  }

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  async createPost(
    @Body() createProjectDto: CreateProjectDto,
    @Res() response,
    @Param('id') id: string,
  ): Promise<Projects | { status: number; message: string }> {
    try {
      const userId = parseInt(id, 10);
      if (isNaN(userId)) {
        throw new Error('Invalid user ID');
      }
      const data: any = {
        ...createProjectDto,
        creator: {
          connect: { id: userId },
        },
      };
      console.log(data);

      const createdProject = await this.projectsService.createProject(
        data,
        userId,
      );
      return response.status(201).json({
        status: 'Ok!',
        message: 'Post created successfully!',
        result: createdProject,
      });
    } catch (error) {
      return response.status(500).json({
        status: 'Error!',
        message: error.message || 'Controller error',
      });
    }
  }
}
