import { Prisma } from '@prisma/client';

export class Tracks implements Prisma.TracksCreateInput {
  track_name: string;
  duration: string;
  audio_url: string;
  track_image: string;
  explicit: string;
  status: string;
  user_id: number;
  user: Prisma.UsersCreateNestedOneWithoutTracksInput;
  album_id: number;
}
