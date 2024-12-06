import { createSlice } from "@reduxjs/toolkit";
import { IEventsState } from "state";
import {
  GetEventDocumentation,
  GetReports,
  GetTestYourKnowlodge,
  GetVideosAndPlays,
} from "./action";

const initialState: IEventsState = {
  isLoading: false,
  error: null,
  reports: null,
  eventDocumentation: null,
  videosAndPlays: null,
  testYourKnowlodge: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetReports.fulfilled, (state, action) => {
        state.reports = action.payload;
        state.isLoading = false;
      })
      .addCase(GetReports.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetReports.rejected, (state) => {
        state.error = "Error";
        state.isLoading = false;
      })
      .addCase(GetEventDocumentation.fulfilled, (state, action) => {
        state.eventDocumentation = action.payload;
        state.isLoading = false;
      })
      .addCase(GetEventDocumentation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetEventDocumentation.rejected, (state) => {
        state.error = "Error";
        state.isLoading = false;
      })
      .addCase(GetVideosAndPlays.fulfilled, (state, action) => {
        state.videosAndPlays = action.payload;
        state.isLoading = false;
      })
      .addCase(GetVideosAndPlays.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetVideosAndPlays.rejected, (state) => {
        state.error = "Error";
        state.isLoading = false;
      })
      .addCase(GetTestYourKnowlodge.fulfilled, (state, action) => {
        state.testYourKnowlodge = action.payload;
        state.isLoading = false;
      })
      .addCase(GetTestYourKnowlodge.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetTestYourKnowlodge.rejected, (state) => {
        state.error = "Error";
        state.isLoading = false;
      });
  },
});

export default eventsSlice.reducer;
