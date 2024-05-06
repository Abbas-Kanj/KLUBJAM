import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllTracksApi } from "./tracksApis";
import { RootState } from "../../app/store";

interface Track {
  id: number;
  track_name: string;
  duration: string;
  audio_url: string;
  track_image: string;
  explicit: string;
  status: string;
  user_id: number;
  album_id: number;
}

interface TrackState {
  tracks: Track[] | null;
}

const initialState: TrackState = {
  tracks: [],
};

export const fetchAllTracks = createAsyncThunk<Track[] | null>(
  "tracks/fetchAllTracks",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const { user } = state.user;
    if (user) {
      const result = await fetchAllTracksApi();
      return result ?? null;
    }
    return null;
  }
);

const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllTracks.fulfilled, (state, action) => {
      state.tracks = action.payload;
    });
  },
});

export const {} = tracksSlice.actions;
export default tracksSlice.reducer;
