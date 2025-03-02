"use client";
import { useRouter } from "next/navigation";
import Card from "../ui/card";
import SectionTitle from "../ui/section-title";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Spinner } from "@nextui-org/spinner";
import { getTopic } from "@/lib/features/scientific-materials/slice";
import { ITopic } from "collection-types";

const Cleanliness = () => {
  const router = useRouter();
  const dispacth = useAppDispatch();
  const { isLoading, topics } = useAppSelector(
    (state) => state.scientificMaterials
  );
  if (isLoading || topics.length === 0)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );
  const handleUrlClick = async (topic: ITopic) => {
    await dispacth(getTopic(topic));
    router.push(`/scientific-materials/${topic.id}`);
  };
  return (
    <div className="p-4 md:p-8 lg:p-16">
      <SectionTitle
        className="text-2xl md:text-4xl font-bold my-8 md:my-12"
        title="النظافة الشخصية:"
      />
      <div className="flex flex-wrap justify-center items-center gap-10">
        {topics.map((topic) => (
          <Card
            key={topic.id}
            image={topic.icon.url}
            title={topic.title}
            description={topic.brief_description}
            onUrlClick={() => handleUrlClick(topic)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cleanliness;
