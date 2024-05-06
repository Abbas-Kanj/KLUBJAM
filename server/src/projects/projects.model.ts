import { Prisma } from '@prisma/client';

export class Projects implements Prisma.ProjectsCreateInput {
  project_name: string;
  type: string;
  description: string;
  privacy: string;
  track_name: string;
  track_image: string;
  audio_url: string;
  duration: string;
  genre: string;
  creator_id: number;
  creator: Prisma.UsersCreateNestedOneWithoutProjectsInput;
}
