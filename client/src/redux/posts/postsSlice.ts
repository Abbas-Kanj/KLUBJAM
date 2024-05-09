import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllPostsApi } from "./postsApis";
import { RootState } from "../../app/store";

interface Post {
  id: number;
  comments: any;
  likes: any;
  caption: string;
  hashtags: string;
  post_picture: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}

interface User {
  id: number;
  username: string;
}

interface PostState {
  posts: Post[] | null;
}

const initialState: PostState = {
  posts: [],
};

export const fetchAllPosts = createAsyncThunk<Post[] | null>(
  "posts/fetchAllPosts",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const { info } = state.user;
    if (info) {
      const result = await fetchAllPostsApi();
      return result ?? null;
    }
    return null;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
