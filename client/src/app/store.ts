import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/user/userSlice";
import postsSlice from "../redux/posts/postsSlice";
import tracksSlice from "../redux/tracks/tracksSlice";
import playlistsSlice from "../redux/playlists/playlistsSlice";
import sessionStorage from "redux-persist/lib/storage/session";
import { persistStore, persistReducer } from "redux-persist";
import usersSlice from "../redux/users/usersSlice";
import projectsSlice from "../redux/projects/projectsSlice";
import coinRequestsSlice from "../redux/coin_requests/coinRequestsSlice";
import commentsSlice from "../redux/comments/commentsSlice";
import musicSlice from "../redux/music/musicSlice";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: userSlice,
    post: postsSlice,
    track: tracksSlice,
    playlist: playlistsSlice,
    users: usersSlice,
    projects: projectsSlice,
    coinRequests: coinRequestsSlice,
    comments: commentsSlice,
    music: musicSlice,
  })
);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
