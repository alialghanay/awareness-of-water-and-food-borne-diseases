import { useAppSelector } from "@/hooks/redux";
import { Button } from "../ui/button";
import SectionTitle from "../ui/section-title";
import { Spinner } from "@nextui-org/spinner";
import RichTextRenderer from "../ui/richtext-render/richtext-render";

const Treatment = () => {
  const { isLoading, treatmentAndPrevention } = useAppSelector(
    (state) => state.scientificMaterials
  );
  if (isLoading || !treatmentAndPrevention)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );
  return (
    <div className="flex flex-col gap-7 p-4 md:p-8 lg:p-16">
      <SectionTitle title={treatmentAndPrevention.title} />
      <RichTextRenderer document={treatmentAndPrevention.content} />
      <div className="w-full flex justify-center items-center">
        <Button variant="costum" className="border border-primary text-primary">
          تعلم أكثـــر
        </Button>
      </div>
    </div>
  );
};

export default Treatment;
