"use client";
import Card from "@/components/ui/card";
import SectionTitle from "@/components/ui/section-title";
import { useRouter } from "next/navigation";

const Learning = () => {
  const router = useRouter();
  const handleCardClick = (section: string) => {
    router.push(`/scientific-materials#${section}`);
  };
  return (
    <div className="bg-primary-foreground p-12">
      <SectionTitle
        className="text-4xl font-bold my-6"
        title="الحملات التعليمية:"
      />
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-14">
        <Card
          image="/svgs/varoiuse.svg"
          title="نقل العدوى"
          isImageLocal={true}
          isCursorCard={true}
          onClick={() => handleCardClick("transmission-of-infection")}
        />
        <Card
          image="/svgs/medicent-book.svg"
          title="التثقيف الصحي"
          isImageLocal={true}
          isCursorCard={true}
          onClick={() => handleCardClick("health-education")}
        />
        <Card
          image="/svgs/sringa.svg"
          title="العلاج والوقاية"
          isImageLocal={true}
          isCursorCard={true}
          onClick={() => handleCardClick("treatment-and-prevention")}
        />
        <Card
          image="/svgs/clean-hand.svg"
          title="النظافة الشخصية"
          isImageLocal={true}
          isCursorCard={true}
          onClick={() => handleCardClick("personal-hygiene")}
        />
      </div>
    </div>
  );
};

export default Learning;
