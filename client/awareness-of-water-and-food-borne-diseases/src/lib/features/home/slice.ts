import { createSlice } from "@reduxjs/toolkit";
import { IHomeState } from "state";
import { GetCampaignDefinition, GetGoal, GetPartners } from "./action";

const initialState: IHomeState = {
  isLoading: false,
  error: null,
  goal: null,
  partners: null,
  campaignDefinition: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetGoal.fulfilled, (state, action) => {
        state.goal = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(GetGoal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetGoal.rejected, (state) => {
        state.error = "Error";
        state.isLoading = false;
      })
      .addCase(GetPartners.fulfilled, (state, action) => {
        state.partners = action.payload;
      })
      .addCase(GetPartners.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetPartners.rejected, (state) => {
        state.error = "Error";
      })
      .addCase(GetCampaignDefinition.fulfilled, (state, action) => {
        state.campaignDefinition = action.payload;
        state.isLoading = false;
      })
      .addCase(GetCampaignDefinition.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetCampaignDefinition.rejected, (state) => {
        state.error = "Error";
        state.isLoading = false;
      });
  },
});

export default homeSlice.reducer;
