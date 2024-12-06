import UseAxiosAuth from "@/hooks/useAxiosAuth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITopic } from "collection-types";
import {
  IHealthEducation,
  ITransmissionOfInfection,
  ITreatmentAndPrevention,
} from "single-types";

export const GetHealthEducation = createAsyncThunk(
  "scientificMaterials/getHealthEducation",
  async (): Promise<IHealthEducation> => {
    const axios = UseAxiosAuth();
    const response = await axios.get("/health-education");
    return response.data.data as IHealthEducation;
  }
);

export const GetTopics = createAsyncThunk(
  "scientificMaterials/getTopics",
  async (): Promise<ITopic[]> => {
    const axios = UseAxiosAuth();
    const response = await axios.get("/topics?populate=*");
    return response.data.data as ITopic[];
  }
);

export const GetTransmissionOfInfection = createAsyncThunk(
  "scientificMaterials/getTransmissionOfInfection",
  async (): Promise<ITransmissionOfInfection> => {
    const axios = UseAxiosAuth();
    const response = await axios.get("/transmission-of-infection");
    return response.data.data as ITransmissionOfInfection;
  }
);

export const GetTreatmentAndPrevention = createAsyncThunk(
  "scientificMaterials/getTreatmentAndPrevention",
  async (): Promise<ITreatmentAndPrevention> => {
    const axios = UseAxiosAuth();
    const response = await axios.get("/treatment-and-prevention");
    return response.data.data as ITreatmentAndPrevention;
  }
);
