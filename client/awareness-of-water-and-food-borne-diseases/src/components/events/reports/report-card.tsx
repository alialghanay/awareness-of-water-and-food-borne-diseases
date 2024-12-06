import { Button } from "@/components/ui/button";
import { Image } from "@nextui-org/image";
import { IReportCard } from "general";

const ReportCard = ({ date, image, title, buttonString }: IReportCard) => {
  return (
    <div className="border border-primary flex justify-around items-center">
      <div>
        <h1 className="text-2xl font-bold text-primary">{date}</h1>
        <p>{title}</p>
      </div>
      <div className="flex justify-center items-end gap-2">
        <Button variant="costum" className="border border-primary text-primary">
          {buttonString ? buttonString : "اقرأ المزيد"}
        </Button>
        <Image src={image} className="size-4" />
      </div>
    </div>
  );
};

export default ReportCard;
