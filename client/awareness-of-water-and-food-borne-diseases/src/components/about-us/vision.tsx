import { useAppSelector } from "@/hooks/redux";
import SectionTitle from "../ui/section-title";
import { FaRegLightbulb } from "react-icons/fa";
import { Spinner } from "@nextui-org/spinner";
import { Image } from "@nextui-org/image";

const Vision = () => {
  const { sections, isLoading, error } = useAppSelector(
    (state) => state.aboutUs
  );
  if (isLoading || sections.length === 0)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );
  const vision = sections[2];
  return (
    <div className="bg-primary-foreground">
      <div className="flex justify-center items-center gap-4">
        <SectionTitle title={vision.title} />
        {vision.icon && (
          <Image
            src={process.env.IMAGE_URL + vision.icon.url}
            alt="icon"
            width={50}
            height={50}
          />
        )}
      </div>
      <p>{vision.paragraph}</p>
    </div>
  );
};

export default Vision;
