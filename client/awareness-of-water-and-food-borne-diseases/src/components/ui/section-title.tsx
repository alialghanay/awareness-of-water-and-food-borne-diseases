import { ISectionTitle } from "general";

const SectionTitle = ({ title, className }: ISectionTitle) => {
  return (
    <h1 className={className ? className : "text-4xl font-bold"}>{title}</h1>
  );
};

export default SectionTitle;
