import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostState {
  post: {
    caption: string;
    hashtags: string;
    post_picture: string;
    userId: number;
  } | null;
}

const initialState: PostState = {
  post: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (
      state,
      action: PayloadAction<{
        caption: string;
        hashtags: string;
        post_picture: string;
        userId: number;
      }>
    ) => {
      state.post = action.payload;
    },
  },
});

export const { setPost } = postSlice.actions;
export default postSlice.reducer;
