"use client";
import { Button } from "@/components/ui/button";
import RichTextRenderer from "@/components/ui/richtext-render/richtext-render";
import SectionTitle from "@/components/ui/section-title";
import { useAppSelector } from "@/hooks/redux";
import { Spinner } from "@nextui-org/spinner";

const Goals = () => {
  const { goal, isLoading } = useAppSelector((state) => state.home);
  if (!goal || isLoading)
    return (
      <div className="flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );
  return (
    <div className="flex flex-col gap-14 p-8">
      <SectionTitle title={goal.title} />
      <RichTextRenderer document={goal.content} />
      <Button>اعرف المزيد عن مهمتنـا</Button>
    </div>
  );
};

export default Goals;
