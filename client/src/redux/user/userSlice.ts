import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  fetchUserGroupProjectsApi,
  fetchUserPersonalProjectsApi,
  fetchUserPostsApi,
  fetchUserTracksApi,
} from "./userApis";
interface UserState {
  info: {
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

  posts: Post[];
  tracks: Track[];
  albums: any[];
  playlists: any[];
  produced_tracks: any[];
  projects: {
    personal: Project[];
    group: Project[];
  };
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
  project_name: string;
  type: string;
  description: string;
  privacy: string;
  track_name: string;
  track_image: string;
  audio_url: string;
  duration: string;
  genre: string;
  creatorId: number;
  createdAt: string;
  updatedAt: string;
}

interface Track {
  id: number;
  track_name: string;
  duration: string;
  audio_url: string;
  track_image: string;
  explicit: string;
  status: string;
  user_id: number;
  album_id: number;
  createdAt: string;
}

const initialState: UserState = {
  info: null,
  posts: [],
  tracks: [],
  albums: [],
  playlists: [],
  produced_tracks: [],
  projects: {
    personal: [],
    group: [],
  },
  jam_boxes: [],
  recommendations: [],
  isAuthenticated: false,
};

export const fetchUserPosts = createAsyncThunk(
  "user/fetchUserPosts",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const { info } = state.user;
    if (info) {
      return await fetchUserPostsApi(info.id);
    }
    return null;
  }
);

export const fetchUserPersonalProjects = createAsyncThunk(
  "user/fetchUserPersonalProjects",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const { info } = state.user;
    if (info) {
      return await fetchUserPersonalProjectsApi(info.id);
    }
    return null;
  }
);

export const fetchUserGroupProjects = createAsyncThunk(
  "user/fetchUserGroupProjects",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const { info } = state.user;
    if (info) {
      return await fetchUserGroupProjectsApi(info.id);
    }
    return null;
  }
);

export const fetchUserTracks = createAsyncThunk(
  "user/fetchUserTracks",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const { info } = state.user;
    if (info) {
      return await fetchUserTracksApi(info.id);
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
      state.info = action.payload;
      state.isAuthenticated = true;
    },
    setUserRecommendations: (state, action: PayloadAction<Post[]>) => {
      state.recommendations = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(fetchUserPersonalProjects.fulfilled, (state, action) => {
      state.projects.personal = action.payload;
    });
    builder.addCase(fetchUserGroupProjects.fulfilled, (state, action) => {
      state.projects.group = action.payload;
    });
    builder.addCase(fetchUserTracks.fulfilled, (state, action) => {
      state.tracks = action.payload;
    });
  },
});

export const { setUser, setUserRecommendations } = userSlice.actions;
export default userSlice.reducer;
