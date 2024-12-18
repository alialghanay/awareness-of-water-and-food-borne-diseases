import { IPagination } from "general";
import Dot from "./dot";
const Pagination = ({ count, currentPage }: IPagination) => {
  return (
    <div className="flex justify-center items-center gap-5 p-2">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Dot key={index} active={currentPage - 1 === index} />
        ))}
    </div>
  );
};

export default Pagination;
