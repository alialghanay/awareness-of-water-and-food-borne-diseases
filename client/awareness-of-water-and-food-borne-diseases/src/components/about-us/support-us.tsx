import SectionTitle from "../ui/section-title";
import { Button } from "../ui/button";
import { useAppSelector } from "@/hooks/redux";
import { Spinner } from "@nextui-org/spinner";
import { Image } from "@nextui-org/image";
import RichTextRenderer from "../ui/richtext-render/richtext-render";

const SupportUs = () => {
  const { sections, isLoading } = useAppSelector((state) => state.aboutUs);
  if (isLoading || sections.length === 0)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );
  const supportUs = sections[5];
  return (
    <div className="p-4 md:p-8 lg:p-16">
      <div className="flex justify-start items-center gap-2 mb-2 md:mb-4 lg:mb-6">
        <SectionTitle title={supportUs.title} />
        {supportUs.icon && (
          <Image
            src={process.env.IMAGE_URL + supportUs.icon.url}
            alt="icon"
            className="size-12 md:size-16"
          />
        )}
      </div>
      <div>
        <p className="text-sm md:text-base lg:text-lg">{supportUs.paragraph}</p>
        {supportUs.coustom_text && (
          <RichTextRenderer document={supportUs.coustom_text} />
        )}
      </div>
      {supportUs.btn && <Button variant="costum">اضغط هنا للتبرع</Button>}
    </div>
  );
};

export default SupportUs;
