"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import Banner from "../ui/banner";
import ImagesUi from "./images/images-ui";
import KnowledgeUi from "./knowledge/knowledge-ui";
import ReportsUi from "./reports/reports-ui";
import VideosUi from "./videos/videos-ui";
import { useEffect } from "react";
import {
  GetEventDocumentation,
  GetReports,
  GetTestYourKnowlodge,
  GetVideosAndPlays,
} from "@/lib/features/events/action";

const EventsUi = () => {
  const { banner } = useAppSelector((state) => state.global);
  const dispacth = useAppDispatch();
  useEffect(() => {
    dispacth(GetEventDocumentation());
    dispacth(GetReports());
    dispacth(GetTestYourKnowlodge());
    dispacth(GetVideosAndPlays());
  }, [dispacth]);
  return (
    <section>
      <Banner
        src={banner[2]?.background.url}
        description={banner[2]?.description}
      />
      <ReportsUi />
      <ImagesUi />
      <VideosUi />
      <KnowledgeUi />
    </section>
  );
};

export default EventsUi;
