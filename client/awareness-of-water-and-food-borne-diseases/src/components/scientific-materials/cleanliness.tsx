"use client";
import { useRouter } from "next/navigation";
import Card from "../ui/card";
import SectionTitle from "../ui/section-title";
import { useAppSelector } from "@/hooks/redux";
import { Spinner } from "@nextui-org/spinner";

const Cleanliness = () => {
  const router = useRouter();
  const { isLoading, error, topics } = useAppSelector(
    (state) => state.scientificMaterials
  );
  if (isLoading || topics.length === 0)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );
  return (
    <div className="p-12">
      <SectionTitle
        className="text-4xl font-bold my-6"
        title="النظافة الشخصية:"
      />
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-14">
        {topics.map((topic) => (
          <Card
            key={topic.id}
            image={topic.icon.url}
            title={topic.title}
            description={topic.brief_description}
            onUrlClick={() => router.push(`/scientific-materials/${topic.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cleanliness;
