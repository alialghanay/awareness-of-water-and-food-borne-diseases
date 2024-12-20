"use client";
import SectionsRenderer from "@/components/ui/section-renderer/sections-renderer";
import SectionTitle from "@/components/ui/section-title";
import { useAppSelector } from "@/hooks/redux";
import { Spinner } from "@nextui-org/spinner";
import Banner from "@/components/ui/banner";
import Attachments from "@/components/ui/attachments";

const ReportUi = () => {
  const { report, isLoading } = useAppSelector((state) => state.events);
  if (!report || isLoading)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );
  return (
    <section>
      {report.image && (
        <Banner
          src={report.image.url}
          description={report.brief_description}
          isLoading={isLoading}
        />
      )}
      <div className="flex items-center gap-4 p-4 md:p-8 lg:p-16">
        <SectionTitle
          title={report.title}
          className="text-4xl md:text-6xl font-extrabold text-primary"
        />
      </div>
      <p className="text-xl md:text-2xl p-4 md:p-8 lg:p-16">
        {report.description}
      </p>
      <SectionsRenderer content={report.sections} />
      {report.attachment && <Attachments attachments={report.attachment} />}
    </section>
  );
};

export default ReportUi;
