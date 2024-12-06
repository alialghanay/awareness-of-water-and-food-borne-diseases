const Dot = ({ active }: { active: boolean }) => {
  return (
    <div
      className={`rounded-full size-2 sm:size-4 border border-primary ${
        active ? "bg-primary" : ""
      }`}
    ></div>
  );
};

export default Dot;
