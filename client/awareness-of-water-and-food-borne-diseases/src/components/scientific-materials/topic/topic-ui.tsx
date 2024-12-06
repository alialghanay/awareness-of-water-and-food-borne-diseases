"use client";
import { useParams } from "next/navigation";

const TopicUi = () => {
  const { topic } = useParams();
  return (
    <div>
      <h1>{topic}</h1>
    </div>
  );
};

export default TopicUi;
