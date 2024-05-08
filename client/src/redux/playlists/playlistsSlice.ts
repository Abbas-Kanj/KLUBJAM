import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchAllPlaylistsApi } from "./playlistsApis";

interface Playlist {
  playlist: {
    id: number;
    title: string;
    playlist_image: string;
    userId: number;
  };

  tracks: any[];
}

interface PlaylistState {
  posts: Playlist[] | null;
}

const initialState: PlaylistState = {
  posts: [],
};

const playlistSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const {} = playlistSlice.actions;
export default playlistSlice.reducer;
