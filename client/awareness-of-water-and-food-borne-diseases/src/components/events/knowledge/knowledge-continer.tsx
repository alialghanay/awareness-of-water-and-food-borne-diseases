"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import ImageViewer from "../ui/image-viewer";
import Pagination from "../ui/pagination";
import { IStrapiImage } from "general";

interface KnowledgeContinerProps {
  images: IStrapiImage[];
}

const KnowledgeContiner = ({ images }: KnowledgeContinerProps) => {
  console.log(images);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div dir="ltr" className="flex flex-col justify-center items-center gap-2">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {images.map((image, index) => (
            <ImageViewer
              src={process.env.IMAGE_URL + image.url}
              alt="image"
              key={index}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Pagination
        count={count}
        currentPage={current}
        setCurrentPage={() => null}
      />
    </div>
  );
};

export default KnowledgeContiner;
