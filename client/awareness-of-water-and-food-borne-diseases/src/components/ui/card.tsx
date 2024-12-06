import { Image } from "@nextui-org/image";
import { Button } from "./button";
import { ICard } from "general";

const Card = ({
  image,
  title,
  description,
  buttonString = "المزيد",
  onClick,
  onUrlClick,
  isImageLocal = false,
  isCursorCard = false,
}: ICard) => {
  return (
    // isCursorCard ?? "cursor-pointer"
    <div
      className={
        isCursorCard
          ? "p-6 w-64 flex flex-col justify-center items-center border border-primary bg-gradient-to-br from-white to-[#DDE6CF] cursor-pointer"
          : "p-6 w-64 flex flex-col justify-center items-center border border-primary bg-gradient-to-br from-white to-[#DDE6CF]"
      }
      onClick={onClick}
    >
      {/* logo */}
      <Image
        src={isImageLocal ? image : process.env.IMAGE_URL + image}
        alt="logo"
        className="w-20"
      />
      {/* title */}
      <h1 className="font-extrabold text-lg text-primary">{title}</h1>
      {/* description optional */}
      {description && <p>{description}</p>}
      {/* button optional */}
      {onUrlClick && <Button onClick={onUrlClick}>{buttonString}</Button>}
    </div>
  );
};

export default Card;
