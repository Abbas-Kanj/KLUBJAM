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
import { PlaylistsModule } from './playlists/playlists.module';
import { CoinRequestsModule } from './coin_requests/coinRequests.module';
import { AlbumsModule } from './albums/albums.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    CommentsModule,
    LikesModule,
    FollowsModule,
    TracksModule,
    ProjectsModule,
    PlaylistsModule,
    AlbumsModule,
    CoinRequestsModule,
    AuthModule,
    FileModule,
  ],
  controllers: [],
  providers: [ChatGateway],
})
export class AppModule {}
