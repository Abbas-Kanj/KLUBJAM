import { Prisma } from '@prisma/client';

export class Albums implements Prisma.AlbumsCreateInput {
  title: string;
  genre: string;
  cover_image: string;
  user: Prisma.UsersCreateNestedOneWithoutAlbumsInput;
}
