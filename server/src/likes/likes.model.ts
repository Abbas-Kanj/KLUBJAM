import { Prisma } from '@prisma/client';

export class Likes implements Prisma.LikesCreateInput {
  user_id: number;
  user: Prisma.UsersCreateNestedOneWithoutLikerInput;
  post_id: number;
  post: Prisma.PostsCreateNestedOneWithoutLikesInput;
}
