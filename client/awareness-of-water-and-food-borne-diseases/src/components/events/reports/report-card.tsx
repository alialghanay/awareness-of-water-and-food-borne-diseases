import { Button } from "@/components/ui/button";
import { IReportCard } from "general";

const ReportCard = ({ date, title, buttonString }: IReportCard) => {
  return (
    <div className="border border-primary flex justify-around items-center rounded p-2 md:p-4">
      <div>
        <h1 className="text-lg md:text-2xl font-bold text-primary">{date}</h1>
        <p className="text-sm md:text-base">{title}</p>
      </div>
      <div className="flex justify-center items-end gap-2">
        <Button variant="costum" className="border border-primary text-primary">
          {buttonString ? buttonString : "اقرأ المزيد"}
        </Button>
      </div>
    </div>
  );
};

export default ReportCard;
