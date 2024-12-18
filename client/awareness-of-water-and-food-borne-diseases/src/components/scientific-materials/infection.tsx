import { useAppSelector } from "@/hooks/redux";
import { Button } from "../ui/button";
import SectionTitle from "../ui/section-title";
import { Spinner } from "@nextui-org/spinner";
import RichTextRenderer from "../ui/richtext-render/richtext-render";

const Infection = () => {
  const { transmissionOfInfection, isLoading } = useAppSelector(
    (state) => state.scientificMaterials
  );
  if (!transmissionOfInfection || isLoading)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );
  return (
    <div className="bg-primary-foreground flex flex-col gap-7 p-4 md:p-8 lg:p-16">
      <SectionTitle title={transmissionOfInfection.title} />
      <RichTextRenderer document={transmissionOfInfection.content} />
      <div className="w-full flex justify-center items-center">
        <Button variant="costum" className="border border-primary text-primary">
          تعلم أكثـــر
        </Button>
      </div>
    </div>
  );
};

export default Infection;
