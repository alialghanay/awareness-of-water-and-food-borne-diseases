"use client";
import { Button } from "@/components/ui/button";
import RichTextRenderer from "@/components/ui/richtext-render/richtext-render";
import SectionTitle from "@/components/ui/section-title";
import { useAppSelector } from "@/hooks/redux";
import { Spinner } from "@nextui-org/spinner";
import Link from "next/link";

const Goals = () => {
  const { goal, isLoading } = useAppSelector((state) => state.home);
  if (!goal || isLoading)
    return (
      <div className="flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );
  return (
    <div className="flex flex-col gap-7 p-4 md:p-8 lg:p-16">
      <SectionTitle title={goal.title} />
      <RichTextRenderer document={goal.content} />
      <div className="w-full flex justify-center items-center">
        <Button
          size="sm"
          variant="costum"
          className="border border-primary text-primary"
          asChild
        >
          <Link href="/about-us">اعرف المزيد عن مهمتنـا</Link>
        </Button>
      </div>
    </div>
  );
};

export default Goals;
