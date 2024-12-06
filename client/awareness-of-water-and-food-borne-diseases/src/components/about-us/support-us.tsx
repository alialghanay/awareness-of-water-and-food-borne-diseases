import SectionTitle from "../ui/section-title";
import { Button } from "../ui/button";
import { useAppSelector } from "@/hooks/redux";
import { Spinner } from "@nextui-org/spinner";
import { Image } from "@nextui-org/image";
import RichTextRenderer from "../ui/richtext-render/richtext-render";

const SupportUs = () => {
  const { sections, isLoading, error } = useAppSelector(
    (state) => state.aboutUs
  );
  if (isLoading || sections.length === 0)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );
  const supportUs = sections[5];
  return (
    <div>
      <div className="flex justify-start items-center gap-2">
        <SectionTitle title={supportUs.title} />
        {supportUs.icon && (
          <Image
            src={process.env.IMAGE_URL + supportUs.icon.url}
            alt="icon"
            width={50}
            height={50}
          />
        )}
      </div>
      <p>
        {supportUs.paragraph}
        {supportUs.coustom_text && (
          <RichTextRenderer document={supportUs.coustom_text} />
        )}
      </p>
      {supportUs.btn && <Button variant="costum">اضغط هنا للتبرع</Button>}
    </div>
  );
};

export default SupportUs;
