import { useAppSelector } from "@/hooks/redux";
import { Button } from "../ui/button";
import SectionTitle from "../ui/section-title";
import { Spinner } from "@nextui-org/spinner";
import RichTextRenderer from "../ui/richtext-render/richtext-render";

const HealthEducation = () => {
  const { healthEducation, error, isLoading } = useAppSelector(
    (state) => state.scientificMaterials
  );
  if (isLoading || !healthEducation)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );
  return (
    <div className="bg-primary-foreground flex flex-col gap-14 p-8">
      <SectionTitle title={healthEducation.title} />
      <RichTextRenderer document={healthEducation.content} />
      <Button variant="costum">تعلم أكثـــر</Button>
    </div>
  );
};

export default HealthEducation;
