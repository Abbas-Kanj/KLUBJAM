import { Prisma } from '@prisma/client';

export class Posts implements Prisma.PostsCreateInput {
  caption: string;
  post_picture: string;
  hashtags: string;
  user_id: number;
  user: Prisma.UsersCreateNestedOneWithoutPostInput;
}
