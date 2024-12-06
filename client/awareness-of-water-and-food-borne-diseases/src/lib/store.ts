import { combineReducers, configureStore } from "@reduxjs/toolkit";
import globalSlice from "./features/slice";
import homeSlice from "./features/home/slice";
import aboutUsSlice from "./features/about-us/slice";
import scientificMaterialsSlice from "./features/scientific-materials/slice";
import eventsSlice from "./features/events/slice";

const isDevelopment = process.env.NODE_ENV === "development";

const rootReducer = combineReducers({
  global: globalSlice,
  home: homeSlice,
  aboutUs: aboutUsSlice,
  scientificMaterials: scientificMaterialsSlice,
  events: eventsSlice,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: isDevelopment ? true : false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
