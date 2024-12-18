import { Image } from "@nextui-org/image";
import { Spinner } from "@nextui-org/spinner";
import { IBanner } from "general";

const Banner = ({ description, src, isLoading }: IBanner) => {
  if (isLoading || !src || !description)
    return (
      <div className="relative w-full overflow-hidden flex justify-center items-center h-[178px] md:h-[480px] lg:h-[720px]">
        <Spinner size="lg" />
      </div>
    );

  return (
    <div className="relative w-full overflow-hidden flex justify-center items-center h-[178px] md:h-[480px] lg:h-[720px]">
      <Image
        src={process.env.IMAGE_URL + src}
        alt="banner"
        className="object-cover w-full h-full mix-blend-multiply"
        isBlurred={true}
      />

      {/* Green overlay */}
      <div className="absolute inset-0 bg-primary opacity-50 mix-blend-multiply"></div>

      {/* Text */}
      <div className="absolute text-center text-white px-4 z-20">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
          {description}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
