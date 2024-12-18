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
  }, [dispatch]);
  const { banner, isLoading } = useAppSelector((state) => state.global);
  return (
    <section>
      <Banner
        src={banner[3]?.background.url}
        description={banner[3]?.description}
        isLoading={isLoading}
      />
      <About />
      <div className="flex justify-between md:justify-around items-center gap-2 md:gap-4 my-2">
        <Message />
        <Vision />
      </div>
      <Structure />
      <Tools />
      <SupportUs />
    </section>
  );
};

export default AboutUsUi;
