import { Prisma } from '@prisma/client';

export class Comments implements Prisma.CommentsCreateInput {
  content: string;
  user_id: number;
  user: Prisma.UsersCreateNestedOneWithoutCommentInput;
  post_id: number;
  post: Prisma.PostsCreateNestedOneWithoutCommentInput;
}
