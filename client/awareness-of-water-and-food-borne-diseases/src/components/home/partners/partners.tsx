import SectionTitle from "@/components/ui/section-title";
import { useAppSelector } from "@/hooks/redux";
import { Image } from "@nextui-org/image";

const Partners = () => {
  const { partners, isLoading } = useAppSelector((state) => state.home);
  if (!partners || isLoading) return null;
  return (
    <div>
      <SectionTitle title="شركائنا:" />
      <div className="flex justify-between items-center">
        {partners.image.map((partner) => (
          <Image
            key={partner.id}
            src={process.env.IMAGE_URL + partner.url}
            alt={partner.caption ?? ""}
            width={partner.width}
            height={"auto"}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
