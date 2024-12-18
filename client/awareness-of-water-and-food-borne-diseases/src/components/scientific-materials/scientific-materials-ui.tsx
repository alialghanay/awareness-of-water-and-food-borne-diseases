"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import Banner from "../ui/banner";
import Cleanliness from "./cleanliness";
import HealthEducation from "./health-education";
import Infection from "./infection";
import { useEffect } from "react";
import {
  GetHealthEducation,
  GetTopics,
  GetTransmissionOfInfection,
  GetTreatmentAndPrevention,
} from "@/lib/features/scientific-materials/action";
import Treatment from "./treatment";

const ScientificMaterialsUi = () => {
  const { banner } = useAppSelector((state) => state.global);
  const dispacth = useAppDispatch();
  useEffect(() => {
    dispacth(GetTopics());
    dispacth(GetHealthEducation());
    dispacth(GetTransmissionOfInfection());
    dispacth(GetTreatmentAndPrevention());
  }, [dispacth]);
  return (
    <section>
      <Banner
        src={banner[1]?.background.url}
        description={banner[1]?.description}
      />
      <div id="health-education"></div>
      <HealthEducation />
      <div id="personal-hygiene"></div>
      <Cleanliness />
      <div id="transmission-of-infection"></div>
      <Infection />
      <div id="treatment-and-prevention"></div>
      <Treatment />
    </section>
  );
};

export default ScientificMaterialsUi;
