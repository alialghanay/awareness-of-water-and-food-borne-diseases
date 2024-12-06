import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";

const Vcard = ({ title, href }: { title: string; href: string }) => {
  return (
    <div className="border border-primary rounded flex justify-between items-center p-1 w-full">
      <div className="flex justify-center items-center gap-2">
        <div className="size-2 bg-primary rounded-full"></div>
        <h2 className="text-xl">{title}</h2>
      </div>
      <Link href={href} className="mx-4">
        <Button className="rounded-full bg-primary" size="icon">
          <FaPlay />
        </Button>
      </Link>
    </div>
  );
};

export default Vcard;
