import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchAllPlaylistsApi } from "./playlistsApis";

interface Playlist {
  id: number;
  title: string;
  playlist_image: string;
  userId: number;
  tracks: any[];
}

interface PlaylistState {
  playlists: Playlist[] | null;
}

const initialState: PlaylistState = {
  playlists: [],
};

export const fetchAllPlaylists = createAsyncThunk<Playlist[] | null>(
  "playlists/fetchAllPlaylists",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const { info } = state.user;
    if (info) {
      const result = await fetchAllPlaylistsApi();
      return result ?? null;
    }
    return null;
  }
);

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPlaylists.fulfilled, (state, action) => {
      state.playlists = action.payload;
    });
  },
});

export const {} = playlistSlice.actions;
export default playlistSlice.reducer;
