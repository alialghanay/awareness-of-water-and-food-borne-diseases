"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import Banner from "../ui/banner";
import About from "./about";
import Message from "./message";
import Structure from "./structure";
import SupportUs from "./support-us";
import Tools from "./tools";
import Vision from "./vision";
import { useEffect } from "react";
import { GetSections } from "@/lib/features/about-us/action";

const AboutUsUi = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetSections());
  }, []);
  const { banner, isLoading } = useAppSelector((state) => state.global);
  return (
    <div>
      <Banner
        src={banner[3]?.background.url}
        description={banner[3]?.description}
        isLoading={isLoading}
      />
      <About />
      <div className="flex justify-center items-center gap-2 sm:gap-4">
        <Message />
        <Vision />
      </div>
      <Structure />
      <Tools />
      <SupportUs />
    </div>
  );
};

export default AboutUsUi;
