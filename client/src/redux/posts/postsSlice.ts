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
      action.payload.forEach((newPost) => {
        const existingPostIndex = state.posts.findIndex(
          (post) => post.id === newPost.id
        );
        if (existingPostIndex !== -1) {
          state.posts[existingPostIndex] = {
            ...state.posts[existingPostIndex],
            ...newPost,
          };
        } else {
          state.posts.push(newPost);
        }
      });
    },
  },
});

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;
