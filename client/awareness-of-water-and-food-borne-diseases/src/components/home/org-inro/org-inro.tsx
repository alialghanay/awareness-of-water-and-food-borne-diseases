import { useAppSelector } from "@/hooks/redux";
import { Image } from "@nextui-org/image";
import { Spinner } from "@nextui-org/spinner";

const OrgIntro = () => {
  const { campaignDefinition, isLoading } = useAppSelector(
    (state) => state.home
  );
  if (!campaignDefinition || isLoading)
    return (
      <div className="relative w-full overflow-hidden flex justify-center items-center h-[178px] md:h-[480px] lg:h-[720px]">
        <Spinner size="lg" />
      </div>
    );
  return (
    <div className="relative w-full h-[180x] md:h-[480px] lg:h-[720px] overflow-hidden flex justify-center items-center my-4">
      <Image
        src="/promo.png"
        alt="org-intro"
        className="object-cover w-full h-full"
      />
      <div className="absolute text-white z-20 flex justify-between items-center p-2">
        <div className="w-1/6 md:1/4"></div>
        <p className="text-[9px] md:text-sm lg:text-xl bg-[#7DA537]/70 p-2 md: w-1/2 rounded-lg md:leading-relaxed">
          {campaignDefinition?.definition}
        </p>
        <div className="w-1/2 md:w-full"></div>
      </div>
    </div>
  );
};

export default OrgIntro;
