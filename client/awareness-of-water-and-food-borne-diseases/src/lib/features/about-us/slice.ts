import { createSlice } from "@reduxjs/toolkit";
import { IAboutUsState } from "state";
import { GetSections } from "./action";
import { IAboutUs } from "collection-types";

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
        console.log(action.payload);
        state.sections = action.payload.sort(
          (a: IAboutUs, b: IAboutUs) => a.id_to_use - b.id_to_use
        );
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
