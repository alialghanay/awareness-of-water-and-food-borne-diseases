import SectionTitle from "@/components/ui/section-title";
import KnowledgeContiner from "./knowledge-continer";
import { useAppSelector } from "@/hooks/redux";
import { Spinner } from "@nextui-org/spinner";

const KnowledgeUi = () => {
  const { isLoading, testYourKnowlodge } = useAppSelector(
    (state) => state.events
  );
  if (isLoading || !testYourKnowlodge)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );
  return (
    <div>
      <SectionTitle title="اختبر معلوماتك:" />
      <KnowledgeContiner images={testYourKnowlodge.images} />
    </div>
  );
};

export default KnowledgeUi;
