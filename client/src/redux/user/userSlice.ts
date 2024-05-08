import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchUserPostsApi } from "./userApis";
interface UserState {
  user: {
    id: number;
    username: string;
    email: string;
    role_id: number;
    fullname: string;
    biography: string;
    profile_picture: string;
    country: string;
    phone_number: number;
    balance: number;
    status: string;
    date_of_birth: Date | string;
    created_at: string;
    updated_at: string;
  } | null;

  posts: any[];
  tracks: any[];
  albums: any[];
  playlists: any[];
  produced_tracks: any[];
  projects: any[];
  jam_boxes: any[];
  recommendations: any[];
  isAuthenticated: boolean;
}

interface Post {
  id: number;
  comments: any;
  likes: any;
  user: any;
  caption: string;
  hashtags: string;
  post_picture: string;
}

interface Project {
  id: number;
  comments: any;
  likes: any;
  user: any;
  caption: string;
  hashtags: string;
  post_picture: string;
}

const initialState: UserState = {
  user: null,
  posts: [],
  tracks: [],
  albums: [],
  playlists: [],
  produced_tracks: [],
  projects: [],
  jam_boxes: [],
  recommendations: [],
  isAuthenticated: false,
};

export const fetchUserPosts = createAsyncThunk(
  "user/fetchUserPosts",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const { user } = state.user;
    if (user) {
      return await fetchUserPostsApi(user.id);
    }
    return null;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        id: number;
        username: string;
        email: string;
        role_id: number;
        fullname: string;
        biography: string;
        profile_picture: string;
        country: string;
        balance: number;
        status: string;
        phone_number: number;
        date_of_birth: Date | string;
        created_at: string;
        updated_at: string;
      }>
    ) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    setUserRecommendations: (state, action: PayloadAction<Post[]>) => {
      state.recommendations = action.payload;
    },
    setUserProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = state.projects.concat(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const { setUser, setUserRecommendations, setUserProjects } =
  userSlice.actions;
export default userSlice.reducer;
