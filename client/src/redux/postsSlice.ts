import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  caption: string;
  hashtags: string;
  post_picture: string;
  userId: number;
}

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
  },
});

export const { setPost } = postSlice.actions;
export default postSlice.reducer;
