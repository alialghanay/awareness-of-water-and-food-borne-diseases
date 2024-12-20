import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import ReportCard from "./report-card";
import SectionTitle from "@/components/ui/section-title";
import { Spinner } from "@nextui-org/spinner";
import { IReport } from "collection-types";
import { useRouter } from "next/navigation";
import { getReport } from "@/lib/features/events/slice";

const ReportsUi = () => {
  const router = useRouter();
  const dispacth = useAppDispatch();
  const { reports, isLoading } = useAppSelector((state) => state.events);
  if (isLoading || reports.length === 0)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );

  const handleUrlClick = async (report: IReport) => {
    await dispacth(getReport(report));
    router.push(`/events/${report.id}`);
  };
  return (
    <div className="flex flex-col gap-7 p-4 md:p-8 lg:p-16">
      <SectionTitle title="التقارير" />
      <div className="flex flex-col justify-center items-center gap-2">
        {reports.map((report) => (
          <ReportCard
            key={report.id}
            date={report.title}
            title={report.brief_description}
            image={
              report.image ? `${process.env.IMAGE_URL}${report.image.url}` : ""
            }
            onClick={() => handleUrlClick(report)}
          />
        ))}
      </div>
    </div>
  );
};

export default ReportsUi;
