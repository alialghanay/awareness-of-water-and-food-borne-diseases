import { useAppSelector } from "@/hooks/redux";
import SectionTitle from "../ui/section-title";
import { Spinner } from "@nextui-org/spinner";

const About = () => {
  const { sections, isLoading } = useAppSelector((state) => state.aboutUs);
  if (isLoading || sections.length === 0)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );
  const aboutUs = sections[0];
  return (
    <div className="p-4 md:p-8 lg:p-16">
      <SectionTitle
        title={aboutUs.title}
        className="text-2xl md:text-4xl font-bold mb-2 md:mb-4"
      />
      <p className="md:text-lg">{aboutUs.paragraph}</p>
    </div>
  );
};

export default About;
