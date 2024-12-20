import { Button } from "@/components/ui/button";
import { Image } from "@nextui-org/image";
import { IReportCard } from "general";

const ReportCard = ({
  date,
  title,
  buttonString,
  image,
  onClick,
}: IReportCard) => {
  return (
    <div className="border border-primary flex justify-around items-center rounded p-2 md:p-4">
      <div className="flex justify-center items-center mx-4">
        <Image src={image} alt={title} width={100} height={100} />
      </div>
      <div>
        <h1 className="text-lg md:text-2xl font-bold text-primary">{date}</h1>
        <p className="text-sm md:text-base">{title}</p>
      </div>
      <div className="flex justify-center items-center mx-4">
        <Button
          variant="costum"
          className="border border-primary text-primary"
          onClick={onClick}
        >
          {buttonString ? buttonString : "اقرأ المزيد"}
        </Button>
      </div>
    </div>
  );
};

export default ReportCard;
