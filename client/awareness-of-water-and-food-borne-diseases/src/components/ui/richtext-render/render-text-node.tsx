import { ITextNode } from "general";

const renderTextNode = (textNode: ITextNode, index: number) => {
  const { text, bold, italic, underline, strikethrough } = textNode;
  const className = [
    bold ? "font-bold" : "",
    italic ? "italic" : "",
    underline ? "underline" : "",
    strikethrough ? "line-through" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={className} key={index}>
      {text}
    </span>
  );
};

export default renderTextNode;
