import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: {
    username: string;
    email: string;
    role_id: number;
    fullname: string;
    biography: string;
    profile_picture: string;
    country: string;
    phone_number: number;
    date_of_birth: Date | string;
  } | null;
  posts: any[];
}

const initialState: UserState = {
  user: null,
  posts: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        username: string;
        email: string;
        role_id: number;
        fullname: string;
        biography: string;
        profile_picture: string;
        country: string;
        phone_number: number;
        date_of_birth: Date | string;
      }>
    ) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
