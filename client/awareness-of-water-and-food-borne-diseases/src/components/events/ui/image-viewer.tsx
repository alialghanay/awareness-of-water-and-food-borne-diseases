import { CarouselItem } from "@/components/ui/carousel";
import { Image } from "@nextui-org/image";
import { IImageViewer } from "general";

const ImageViewer = ({ alt, src }: IImageViewer) => {
  return (
    <CarouselItem>
      <Image alt={alt} src={src} />
    </CarouselItem>
  );
};

export default ImageViewer;
