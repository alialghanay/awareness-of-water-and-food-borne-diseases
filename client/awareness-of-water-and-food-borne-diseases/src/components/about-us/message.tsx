import { Spinner } from "@nextui-org/spinner";
import SectionTitle from "../ui/section-title";
import { useAppSelector } from "@/hooks/redux";
import { Image } from "@nextui-org/image";

const Message = () => {
  const { sections, isLoading, error } = useAppSelector(
    (state) => state.aboutUs
  );
  if (isLoading || sections.length === 0)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );
  const message = sections[1];
  return (
    <div className="bg-primary-foreground">
      <div className="flex justify-center items-center gap-4">
        <SectionTitle title={message.title} />
        {message.icon && (
          <Image
            src={process.env.IMAGE_URL + message.icon.url}
            alt="icon"
            width={50}
            height={50}
          />
        )}
      </div>
      <p>{message.paragraph}</p>
    </div>
  );
};

export default Message;
