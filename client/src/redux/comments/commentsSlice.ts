import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchAllCommentsApi } from "../comments/commentsApi";

interface Comment {
  id: number;
  content: string;
  post_id: number;
  user_id: number;
  createdAt: string;
  updatedAt: string;
  user: User;
}

interface User {
  id: number;
  username: string;
}

interface CommentState {
  comments: Comment[] | null;
}

const initialState: CommentState = {
  comments: [],
};

export const fetchAllComments = createAsyncThunk<Comment[] | null>(
  "comments/fetchAllComments",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const { info } = state.user;
    if (info) {
      const result = await fetchAllCommentsApi();
      return result ?? null;
    }
    return null;
  }
);

const commentsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
