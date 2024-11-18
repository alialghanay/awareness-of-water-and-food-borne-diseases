import { Image } from "@nextui-org/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden flex justify-center items-center">
      <Image
        src="/banner.png"
        alt="banner"
        className="object-cover w-full h-full opacity-80"
      />
      <div className="absolute text-center text-white px-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
          حماية الصحة والوقاية من الأمراض في غزة
        </h1>
      </div>
    </div>
  );
};

export default Banner;
