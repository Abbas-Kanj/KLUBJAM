import { Module } from '@nestjs/common';
import { CoinRequestsController } from './coinRequests.controller';
import { CoinRequestsService } from './coinRequests.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CoinRequestsController],
  providers: [CoinRequestsService, PrismaService],
})
export class CoinRequestsModule {}
