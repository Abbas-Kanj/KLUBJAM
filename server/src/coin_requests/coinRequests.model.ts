import { Prisma } from '@prisma/client';

export class CoinRequests implements Prisma.Coin_RequestsCreateInput {
  amount: number;
  status: string;
  user_id: number;
  user: Prisma.UsersCreateNestedOneWithoutRequesterInput;
}
