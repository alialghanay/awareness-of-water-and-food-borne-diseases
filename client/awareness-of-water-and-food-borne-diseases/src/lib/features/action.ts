import UseAxiosAuth from "@/hooks/useAxiosAuth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBanner } from "collection-types";

export const GetBannerAction = createAsyncThunk(
  "banner/get",
  async (): Promise<IBanner[]> => {
    const axios = UseAxiosAuth();
    const response = await axios.get("/banners?populate=*");
    return response.data as IBanner[];
  }
);

export const GetBanner = async (): Promise<IBanner[]> => {
  const axios = UseAxiosAuth();
  const response = await axios.get("/banners?populate=*");
  return response.data.data as IBanner[];
};
