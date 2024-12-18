"use client";
import SectionsRenderer from "@/components/ui/section-renderer/sections-renderer";
import SectionTitle from "@/components/ui/section-title";
import { useAppSelector } from "@/hooks/redux";
import { Image } from "@nextui-org/image";
import { Spinner } from "@nextui-org/spinner";
import ImagesUi from "./images/images-ui";

const TopicUi = () => {
  const { topic, isLoading } = useAppSelector(
    (state) => state.scientificMaterials
  );
  if (!topic || isLoading)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );
  return (
    <section>
      <div className="flex items-center gap-4 p-4 md:p-8 lg:p-16">
        <SectionTitle
          title={topic.title}
          className="text-4xl md:text-6xl font-extrabold text-primary"
        />
        <Image
          src={process.env.IMAGE_URL + topic.icon.url}
          className="w-16 md:w-20"
          alt="icon"
        />
      </div>
      <p className="text-xl md:text-2xl p-4 md:p-8 lg:p-16">
        {topic.description}
      </p>
      <SectionsRenderer content={topic.sections} />
      {topic.image && (
        <ImagesUi images={topic.image} title={topic.image_title} />
      )}
    </section>
  );
};

export default TopicUi;
