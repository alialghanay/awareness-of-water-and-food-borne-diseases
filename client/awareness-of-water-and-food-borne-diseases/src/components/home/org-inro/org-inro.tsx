import { useAppSelector } from "@/hooks/redux";
import { Image } from "@nextui-org/image";
import { Spinner } from "@nextui-org/spinner";

const OrgIntro = () => {
  const { campaignDefinition, isLoading } = useAppSelector(
    (state) => state.home
  );
  if (!campaignDefinition || isLoading)
    return (
      <div className="relative w-full overflow-hidden flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px]">
        <Spinner size="lg" />
      </div>
    );
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden flex justify-center items-center">
      <Image
        src="/promo.png"
        alt="org-intro"
        className="object-cover w-full h-full"
      />
      <div className="absolute bg-primary bg-opacity-5 text-white p-4 z-20">
        <p className="text-sm md:text-base lg:text-lg">
          {campaignDefinition?.definition}
        </p>
      </div>
    </div>
  );
};

export default OrgIntro;
