import { Spinner } from "@nextui-org/spinner";
import SectionTitle from "../ui/section-title";
import { useAppSelector } from "@/hooks/redux";
import { Image } from "@nextui-org/image";
import RichTextRenderer from "../ui/richtext-render/richtext-render";

const Structure = () => {
  const { sections, isLoading } = useAppSelector((state) => state.aboutUs);
  if (isLoading || sections.length === 0)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );
  const structure = sections[4];
  return (
    <div className="p-4 md:p-8 lg:p-16">
      <div className="flex justify-start items-center gap-4 mb-2 md:mb-4 lg:mb-6">
        <SectionTitle title="هيكلية الحملة:" />
        {structure.icon && (
          <Image
            src={process.env.IMAGE_URL + structure.icon.url}
            alt="icon"
            className="size-12 md:size-16"
          />
        )}
      </div>
      <p className="text-sm md:text-base lg:text-lg">{structure.paragraph}</p>
      {structure.coustom_text && (
        <RichTextRenderer document={structure.coustom_text} />
      )}
    </div>
  );
};

export default Structure;
