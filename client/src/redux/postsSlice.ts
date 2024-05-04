import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: number;
  comments: any;
  likes: any;
  user: any;
  caption: string;
  hashtags: string;
  post_picture: string;
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
    setPosts: (state, action: PayloadAction<Post[]>) => {
      const newPosts = action.payload.filter((newPost) => {
        return !state.posts.some((post) => post.id === newPost.id);
      });
      state.posts.push(...newPosts);
    },
  },
});

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;
