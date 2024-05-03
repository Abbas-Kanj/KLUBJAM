import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateFollowDto {
  @IsNotEmpty()
  @IsInt()
  follower_id: number;
  @IsNotEmpty()
  @IsInt()
  following_id: number;
}
