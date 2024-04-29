import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './authentication/auth.module';
import { FileModule } from './files/file.module';

@Module({
  imports: [UsersModule, AuthModule, FileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
