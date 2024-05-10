import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateAlbumDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  genre: string;
  @IsNotEmpty()
  cover_image: string;
  @IsNotEmpty()
  @IsInt()
  userId: number;
}
