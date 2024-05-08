import { IsInt, IsNotEmpty } from 'class-validator';

export class CreatePlaylistDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  playlist_image: string;
  @IsNotEmpty()
  @IsInt()
  userId: number;
  trackIds: number[];
}
