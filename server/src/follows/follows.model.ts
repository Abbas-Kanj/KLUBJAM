import { Prisma } from '@prisma/client';

export class Follows implements Prisma.FollowsCreateInput {
  follower_id: number;
  user_follower?: Prisma.UsersCreateNestedOneWithoutFollowersInput;
  following_id: number;
  user_following?: Prisma.UsersCreateNestedOneWithoutFollowingsInput;
}
