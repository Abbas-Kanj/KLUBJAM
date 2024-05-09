import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCoinRequestDto } from './dto/create-coinRequest.dto';
import { Coin_Requests } from '@prisma/client';

@Injectable()
export class CoinRequestsService {
  constructor(private readonly prisma: PrismaService) {}

  async createCoinRequest(
    createCoinRequestDto: CreateCoinRequestDto,
    userId: number,
  ): Promise<Coin_Requests> {
    try {
      const coinRequest = await this.prisma.coin_Requests.create({
        data: {
          ...createCoinRequestDto,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
      return coinRequest;
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred creating the coin request');
    }
  }
}
