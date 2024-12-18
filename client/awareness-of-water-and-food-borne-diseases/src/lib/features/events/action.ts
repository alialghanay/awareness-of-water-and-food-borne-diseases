import UseAxiosAuth from "@/hooks/useAxiosAuth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetReports = createAsyncThunk("events/getReports", async () => {
  const axios = UseAxiosAuth();
  const response = await axios.get("/reports?populate=*");
  return response.data.data;
});

export const GetEventDocumentation = createAsyncThunk(
  "events/getEventDocumentation",
  async () => {
    const axios = UseAxiosAuth();
    const response = await axios.get("/event-documentation?populate=*");
    return response.data.data;
  }
);

export const GetVideosAndPlays = createAsyncThunk(
  "events/getVideosAndPlays",
  async () => {
    const axios = UseAxiosAuth();
    const response = await axios.get("/videos-and-plays?populate=*");
    return response.data.data;
  }
);

export const GetTestYourKnowlodge = createAsyncThunk(
  "events/getTestYourKnowlodge",
  async () => {
    const axios = UseAxiosAuth();
    const response = await axios.get("/test-your-knowledge?populate=*");
    return response.data.data;
  }
);
