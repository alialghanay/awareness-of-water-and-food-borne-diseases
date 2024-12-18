import SectionTitle from "@/components/ui/section-title";
import Vcard from "./vcard";
import { useAppSelector } from "@/hooks/redux";
import { Spinner } from "@nextui-org/spinner";

const VideosUi = () => {
  const { videosAndPlays, isLoading } = useAppSelector((state) => state.events);
  if (isLoading || videosAndPlays.length === 0)
    return (
      <div className="  ">
        <Spinner size="lg" />
      </div>
    );
  return (
    <div>
      <SectionTitle title="فيديوهات ومسرحيات:" />
      <div className="flex flex-col justify-center items-center gap-4 m-8">
        {videosAndPlays.map((video, index) => (
          <Vcard
            key={index}
            title={video.title}
            href={`${process.env.IMAGE_URL}${video.video.url}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideosUi;
