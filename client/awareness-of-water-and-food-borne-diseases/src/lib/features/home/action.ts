import useAxios from "@/hooks/useAxiosAuth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetGoal = createAsyncThunk("home/getGoal", async () => {
  const axios = useAxios();
  const response = await axios.get("/goal");
  return response.data.data;
});

export const GetPartners = createAsyncThunk("home/getPartners", async () => {
  const axios = useAxios();
  const response = await axios.get("/partner?populate=*");
  return response.data.data;
});

export const GetCampaignDefinition = createAsyncThunk(
  "home/getCampaignDefinition",
  async () => {
    const axios = useAxios();
    const response = await axios.get("/campaign-definition");
    return response.data.data;
  }
);
