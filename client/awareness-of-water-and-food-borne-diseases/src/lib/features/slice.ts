import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { availableLanguages } from "localization";
import { IGlobalState } from "state";
import { GetBanner, GetBannerAction } from "./action";

export const initialState: IGlobalState = {
  isLoading: false,
  error: null,
  banner: [],
  local: "ar",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLanguage(state, action: PayloadAction<availableLanguages>) {
      state.local = action.payload;
    },
    clearGlobalState: (state) => {
      state = initialState;
    },
    setBanner(state, action) {
      state.banner = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetBannerAction.fulfilled, (state, action) => {
      state.banner = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(GetBannerAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetBannerAction.rejected, (state) => {
      state.error = "Error";
      state.isLoading = false;
    });
  },
});

export default globalSlice.reducer;
export const {
  setLoading,
  setError,
  setLanguage,
  clearGlobalState,
  setBanner,
} = globalSlice.actions;
