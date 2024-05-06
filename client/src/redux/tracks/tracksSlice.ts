import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Track {
  id: number;
  track_name: string;
  duration: string;
  audio_url: string;
  track_image: string;
  explicit: string;
  status: string;
  user_id: number;
  album_id: any;
}

interface TrackState {
  tracks: Track[];
}

const initialState: TrackState = {
  tracks: [],
};

const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setTracks: (state, action: PayloadAction<Track[]>) => {
      action.payload.forEach((newTrack) => {
        const existingTrackIndex = state.tracks.findIndex(
          (track) => track.id === newTrack.id
        );
        if (existingTrackIndex !== -1) {
          state.tracks[existingTrackIndex] = {
            ...state.tracks[existingTrackIndex],
            ...newTrack,
          };
        } else {
          state.tracks.push(newTrack);
        }
      });
    },
  },
});

export const { setTracks } = tracksSlice.actions;
export default tracksSlice.reducer;
