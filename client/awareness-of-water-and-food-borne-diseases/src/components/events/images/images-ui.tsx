"use client";
import SectionTitle from "@/components/ui/section-title";
import ImagesContiner from "./image-continer";
import { useAppSelector } from "@/hooks/redux";
import { Spinner } from "@nextui-org/spinner";

const ImagesUi = () => {
  const { eventDocumentation, isLoading } = useAppSelector(
    (state) => state.events
  );
  if (!eventDocumentation || isLoading)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );
  return (
    <div className="">
      <SectionTitle title="توثيق الفعاليات:" />
      <ImagesContiner images={eventDocumentation.images} />
    </div>
  );
};

export default ImagesUi;
