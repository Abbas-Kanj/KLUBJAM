import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/user/userSlice";
import postsSlice from "../redux/posts/postsSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    post: postsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
