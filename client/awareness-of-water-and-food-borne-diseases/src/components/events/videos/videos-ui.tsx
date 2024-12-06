import SectionTitle from "@/components/ui/section-title";
import Vcard from "./vcard";
const fackeJason = [
  {
    title: "مسرحية غسل اليدين.",
    href: "/",
  },
  {
    title: "فيديو كرتون غسل اليدين.",
    href: "/",
  },
  {
    title: "مسرحية التطبيب الذاتي.",
    href: "/",
  },
  {
    title: "فيديو حماية الأطفال انجليزي.",
    href: "/",
  },
  {
    title: "فيديو حماية الأطفال انجليزي.",
    href: "/",
  },
  {
    title: "فيديو حماية الأطفال انجليزي.",
    href: "/",
  },
];

const VideosUi = () => {
  return (
    <div>
      <SectionTitle title="فيديوهات ومسرحيات:" />
      <div className="flex flex-col justify-center items-center gap-4 m-8">
        {fackeJason.map((item, index) => (
          <Vcard key={index} title={item.title} href={item.href} />
        ))}
      </div>
    </div>
  );
};

export default VideosUi;
