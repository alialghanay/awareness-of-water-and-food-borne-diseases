"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import Banner from "../ui/banner";
import Cleanliness from "./cleanliness";
import HealthEducation from "./health-education";
import Infection from "./infection";
import { useEffect, useState } from "react";
import {
  GetHealthEducation,
  GetTopics,
  GetTransmissionOfInfection,
  GetTreatmentAndPrevention,
} from "@/lib/features/scientific-materials/action";
import Treatment from "./treatment";
import { Button } from "@nextui-org/react";

const ScientificMaterialsUi = () => {
  const { banner, isLoading } = useAppSelector((state) => state.global);
  const dispacth = useAppDispatch();
  useEffect(() => {
    dispacth(GetTopics());
    dispacth(GetHealthEducation());
    dispacth(GetTransmissionOfInfection());
    dispacth(GetTreatmentAndPrevention());
  }, []);
  return (
    <div>
      <Banner
        src={banner[1]?.background.url}
        description={banner[1]?.description}
      />
      <HealthEducation />
      <Cleanliness />
      <Infection />
      <Treatment />
    </div>
  );
};

export default ScientificMaterialsUi;
