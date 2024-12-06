import { createSlice } from "@reduxjs/toolkit";
import { IAboutUsState } from "state";
import { GetSections } from "./action";

const initialState: IAboutUsState = {
  isLoading: false,
  error: null,
  sections: [],
};

const aboutUsSlice = createSlice({
  name: "aboutUs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetSections.fulfilled, (state, action) => {
        state.sections = action.payload;
        state.isLoading = false;
      })
      .addCase(GetSections.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetSections.rejected, (state) => {
        state.error = "Error";
        state.isLoading = false;
      });
  },
});

export default aboutUsSlice.reducer;
