import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  } | null;

  posts: any[];
  tracks: any[];
  albums: any[];
  playlists: any[];
  produced_tracks: any[];
  projects: any[];
  jam_boxes: any[];
  recommendations: any[];
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
};

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
      }>
    ) => {
      state.user = action.payload;
    },
    setUserPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setUser, setUserPosts } = userSlice.actions;
export default userSlice.reducer;
