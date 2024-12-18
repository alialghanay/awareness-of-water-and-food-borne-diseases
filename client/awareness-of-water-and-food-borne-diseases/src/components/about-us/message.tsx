import { Spinner } from "@nextui-org/spinner";
import SectionTitle from "../ui/section-title";
import { useAppSelector } from "@/hooks/redux";
import { Image } from "@nextui-org/image";

const Message = () => {
  const { sections, isLoading } = useAppSelector((state) => state.aboutUs);
  if (isLoading || sections.length === 0)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );
  const message = sections[1];
  return (
    <div className="bg-primary-foreground p-2 md:p-4 lg:p-6 size-48 md:size-72">
      <div className="flex justify-center items-center gap-4 mb-2">
        <SectionTitle title={message.title} />
        {message.icon && (
          <Image
            src={process.env.IMAGE_URL + message.icon.url}
            alt="icon"
            className="size-12 md:size-16"
          />
        )}
      </div>
      <p className="text-xs md:text-sm lg:text-base">{message.paragraph}</p>
    </div>
  );
};

export default Message;
