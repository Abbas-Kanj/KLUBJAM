import { Prisma } from '@prisma/client';

export class CoinRequsets implements Prisma.Coin_RequestsCreateInput {
  amount: number;
  status: string;
  musician: Prisma.UsersCreateNestedOneWithoutMusicianInput;
  admin: Prisma.UsersCreateNestedOneWithoutAdminInput;
}
