"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import Banner from "../ui/banner";
import Goals from "./goals/goals";
import Learning from "./learning/learing";
import OrgIntro from "./org-inro/org-inro";
import Partners from "./partners/partners";
import { useEffect } from "react";
import {
  GetCampaignDefinition,
  GetGoal,
  GetPartners,
} from "@/lib/features/home/action";

const HomeUi = () => {
  const { banner, isLoading } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetGoal());
    dispatch(GetPartners());
    dispatch(GetCampaignDefinition());
  }, [dispatch]);
  return (
    <section>
      <p>Hello World</p>
      <Banner
        src={banner[0]?.background.url}
        description={banner[0]?.description}
        isLoading={isLoading}
      />
      <Goals />
      <OrgIntro />
      <Learning />
      <Partners />
    </section>
  );
};

export default HomeUi;
