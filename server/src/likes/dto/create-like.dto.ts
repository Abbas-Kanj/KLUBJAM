import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateLikeDto {
  @IsNotEmpty()
  @IsInt()
  userId: number;
  @IsNotEmpty()
  @IsInt()
  postId: number;
}
