import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchAllProjectsApi } from "./projectsApis";

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
}

interface ProjectState {
  project: Project[] | null;
}

const initialState: ProjectState = {
  project: [],
};

export const fetchAllProjects = createAsyncThunk(
  "projects/fetchAllProjects",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const { info } = state.user;
    if (info) {
      return await fetchAllProjectsApi();
    }
    return null;
  }
);

const projectsSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProjects.fulfilled, (state, action) => {
      state.project = action.payload;
    });
  },
});

export const {} = projectsSlice.actions;
export default projectsSlice.reducer;
