import { Spinner } from "@nextui-org/spinner";
import SectionTitle from "../ui/section-title";
import { useAppSelector } from "@/hooks/redux";
import RichTextRenderer from "../ui/richtext-render/richtext-render";
import { Image } from "@nextui-org/image";

const Tools = () => {
  const { sections, isLoading } = useAppSelector((state) => state.aboutUs);
  if (isLoading || sections.length === 0)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );
  const tools = sections[3];
  return (
    <div className="bg-primary-foreground flex justify-between items-center gap-2 md:gap-4 p-4 md:p-8 lg:p-16">
      <div className="flex flex-col gap-2">
        <div className="flex justify-center items-center gap-2">
          <SectionTitle title={tools.title} />
          {tools.icon && (
            <Image
              src={process.env.IMAGE_URL + tools.icon.url}
              alt="icon"
              className="size-12 md:size-16"
            />
          )}
        </div>
        <p className="text-sm md:text-base lg:text-lg">{tools.paragraph}</p>
      </div>
      {tools.coustom_text && <RichTextRenderer document={tools.coustom_text} />}
    </div>
  );
};

export default Tools;
