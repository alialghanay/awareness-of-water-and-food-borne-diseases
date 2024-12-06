import { useAppSelector } from "@/hooks/redux";
import ReportCard from "./report-card";
import SectionTitle from "@/components/ui/section-title";

const ReportsUi = () => {
  const { reports, isLoading, error } = useAppSelector((state) => state.events);

  return (
    <div>
      <SectionTitle title="التقارير" />
      <div className="flex flex-col justify-center items-center">
        <ReportCard
          date="أغسطس - 2024"
          title="قطاع غزة يتحدى.. متطوعون ينشرون الوعي الصحي"
          image="/rcard-image.png"
        />
        <ReportCard
          date="أغسطس - 2024"
          title="قطاع غزة يتحدى.. متطوعون ينشرون الوعي الصحي"
          image="/rcard-image.png"
        />
        <ReportCard
          date="أغسطس - 2024"
          title="قطاع غزة يتحدى.. متطوعون ينشرون الوعي الصحي"
          image="/rcard-image.png"
        />
      </div>
    </div>
  );
};

export default ReportsUi;
