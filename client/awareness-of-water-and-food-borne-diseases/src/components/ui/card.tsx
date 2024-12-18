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
          ? "w-28 h-20 md:w-48 md:h-36 lg:w-56 lg:h-40 flex flex-col justify-center items-center border border-primary bg-gradient-to-br from-white to-[#DDE6CF] cursor-pointer shadow-lg rounded"
          : "p-6 w-32 md:w-56 lg:w-64 flex flex-col justify-center items-center border border-primary bg-gradient-to-br from-white to-[#DDE6CF] rounded"
      }
      onClick={onClick}
    >
      {/* logo */}
      <Image
        src={isImageLocal ? image : process.env.IMAGE_URL + image}
        alt="logo"
        className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20"
      />
      {/* title */}
      <h1 className="font-semibold text-sm md:text-base lg:text-lg text-primary text-center">
        {title}
      </h1>
      {/* description optional */}
      {description && (
        <p className="text-[9px] md:text-base text-center my-2">
          {description}
        </p>
      )}
      {/* button optional */}
      {onUrlClick && (
        <Button
          variant="costum2"
          className="text-white my-2"
          onClick={onUrlClick}
          size="sm"
        >
          {buttonString}
        </Button>
      )}
    </div>
  );
};

export default Card;
