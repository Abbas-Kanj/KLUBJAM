import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchAllUsersApi } from "./usersApis";

interface User {
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
}

interface UserState {
  user: User[] | null;
}

const initialState: UserState = {
  user: [],
};

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const { info } = state.user;
    if (info) {
      return await fetchAllUsersApi();
    }
    return null;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
