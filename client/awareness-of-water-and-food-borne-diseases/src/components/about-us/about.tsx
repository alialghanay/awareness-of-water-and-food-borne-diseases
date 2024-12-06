import { useAppSelector } from "@/hooks/redux";
import SectionTitle from "../ui/section-title";
import { Spinner } from "@nextui-org/spinner";

const About = () => {
  const { sections, isLoading, error } = useAppSelector(
    (state) => state.aboutUs
  );
  if (isLoading || sections.length === 0)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner size="lg" />
      </div>
    );
  const aboutUs = sections[0];
  return (
    <div>
      <SectionTitle title={aboutUs.title} />
      <p>{aboutUs.paragraph}</p>
    </div>
  );
};

export default About;
