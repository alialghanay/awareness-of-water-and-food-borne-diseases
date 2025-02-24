import { createSlice } from "@reduxjs/toolkit";
import { IScientificMaterialsState } from "state";
import {
  GetHealthEducation,
  GetTopics,
  GetTransmissionOfInfection,
  GetTreatmentAndPrevention,
} from "./action";

const initialState: IScientificMaterialsState = {
  isLoading: false,
  error: null,
  healthEducation: null,
  topics: [],
  transmissionOfInfection: null,
  treatmentAndPrevention: null,
  topic: null,
};

export const scientificMaterialsSlice = createSlice({
  name: "scientificMaterials",
  initialState,
  reducers: {
    getTopic: (state, action) => {
      state.topic = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetHealthEducation.fulfilled, (state, action) => {
        state.healthEducation = action.payload;
        state.isLoading = false;
      })
      .addCase(GetHealthEducation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetHealthEducation.rejected, (state, action) => {
        console.log(action.error);
        state.error = "Error";
        state.isLoading = false;
      })
      .addCase(GetTopics.fulfilled, (state, action) => {
        const fixed = action.payload.map((topic) => {
          if (!topic.icon) {
            return {
              ...topic,
              icon: {
                id: 0,
                documentId: "",
                name: "",
                alternativeText: "",
                caption: "",
                width: 0,
                height: 0,
                formats: {
                  thumbnail: {
                    name: "",
                    hash: "",
                    ext: "",
                    mime: "",
                  },
                },
                url: "",
              },
            };
          }
          return topic;
        });
        state.topics = fixed;
        state.isLoading = false;
      })
      .addCase(GetTopics.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetTopics.rejected, (state) => {
        state.error = "Error";
        state.isLoading = false;
      })
      .addCase(GetTransmissionOfInfection.fulfilled, (state, action) => {
        state.transmissionOfInfection = action.payload;
        state.isLoading = false;
      })
      .addCase(GetTransmissionOfInfection.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetTransmissionOfInfection.rejected, (state) => {
        state.error = "Error";
        state.isLoading = false;
      })
      .addCase(GetTreatmentAndPrevention.fulfilled, (state, action) => {
        state.treatmentAndPrevention = action.payload;
        state.isLoading = false;
      })
      .addCase(GetTreatmentAndPrevention.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetTreatmentAndPrevention.rejected, (state) => {
        state.error = "Error";
        state.isLoading = false;
      });
  },
});

export default scientificMaterialsSlice.reducer;
export const { getTopic } = scientificMaterialsSlice.actions;
