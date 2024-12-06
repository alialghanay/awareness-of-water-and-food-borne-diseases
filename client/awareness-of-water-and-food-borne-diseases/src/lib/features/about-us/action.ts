import UseAxiosAuth from "@/hooks/useAxiosAuth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetSections = createAsyncThunk("aboutUs/getSections", async () => {
  const axios = UseAxiosAuth();
  const response = await axios.get("/about-uses?populate=*");
  return response.data.data;
});
