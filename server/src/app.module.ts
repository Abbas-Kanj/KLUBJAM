import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './authentication/auth.module';
import { FileModule } from './files/file.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { LikesModule } from './likes/likes.module';
import { FollowsModule } from './follows/follows.module';
import { TracksModule } from './tracks/tracks.module';
import { ChatGateway } from './chat/chat.gateway';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    CommentsModule,
    LikesModule,
    FollowsModule,
    TracksModule,
    ProjectsModule,
    AuthModule,
    FileModule,
  ],
  controllers: [],
  providers: [ChatGateway],
})
export class AppModule {}
