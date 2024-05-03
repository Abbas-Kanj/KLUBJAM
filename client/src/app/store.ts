import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/userSlice";
import postsSlice from "../redux/postsSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    post: postsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
