import { IsInt, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  caption: string;
  @IsNotEmpty()
  post_picture: string;
  @IsNotEmpty()
  hashtags: string;
  @IsNotEmpty()
  @IsInt()
  userId: number;
}
