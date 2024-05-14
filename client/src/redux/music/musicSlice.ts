import { createSlice } from "@reduxjs/toolkit";

interface Playing {
  id: number;
  audio_url: string;
  track_image: string;
  track_name: string;
  duration: string;
  explicit: string;
  status: string;
  user_id: number;
  album_id: any;
  createdAt: any;
  updatedAt: any;
  user: any;
}

interface Track {
  id: number;
  audio_url: string;
  track_image: string;
  track_name: string;
}

interface Playlists {
  tracks: Track[];
}

export const initialState = {
  playlists: null as Playlists | null,
  playing: null as Playing | null,
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    setPlaylist: (state, action) => {
      state.playlists = action.payload;
    },
    setCurrPlaying: (state, action) => {
      state.playing = action.payload;
    },
  },
});

export const { setPlaylist, setCurrPlaying } = musicSlice.actions;

export default musicSlice.reducer;
