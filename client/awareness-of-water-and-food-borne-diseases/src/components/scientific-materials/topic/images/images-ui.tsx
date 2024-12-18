import SectionTitle from "@/components/ui/section-title";
import ImagesContiner from "./image-continer";
import { IStrapiImage } from "general";

interface ImagesUiProps {
  images: IStrapiImage[];
  title: string | null;
}

const ImagesUi = ({ images, title }: ImagesUiProps) => {
  console.log(images);
  if (images.length === 0 || !title) return null;
  return (
    <div className="p-4 md:p-8 lg:p-16">
      <SectionTitle title={title} />
      <ImagesContiner images={images} />
    </div>
  );
};

export default ImagesUi;
