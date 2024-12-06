import { useAppSelector } from "@/hooks/redux";
import { Button } from "../ui/button";
import SectionTitle from "../ui/section-title";
import { Spinner } from "@nextui-org/spinner";
import RichTextRenderer from "../ui/richtext-render/richtext-render";

const Infection = () => {
  const { transmissionOfInfection, isLoading, error } = useAppSelector(
    (state) => state.scientificMaterials
  );
  if (!transmissionOfInfection || isLoading)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );
  return (
    <div className="bg-primary-foreground flex flex-col gap-14 p-8">
      <SectionTitle title={transmissionOfInfection.title} />
      <RichTextRenderer document={transmissionOfInfection.content} />
      <Button variant="costum">تعلم أكثـــر</Button>
    </div>
  );
};

export default Infection;
