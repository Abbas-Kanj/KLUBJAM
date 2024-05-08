import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/user/userSlice";
import postsSlice from "../redux/posts/postsSlice";
import tracksSlice from "../redux/tracks/tracksSlice";
import playlistsSlice from "../redux/playlists/playlistsSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    post: postsSlice,
    track: tracksSlice,
    playlist: playlistsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
