import { IContentNode } from "general";
import renderContent from "./render-content";

interface DocumentProps {
  document: IContentNode[];
}

const RichTextRenderer = ({ document }: DocumentProps) => {
  return (
    <>
      {document.map((content, idx) => (
        <div className="flex flex-col" key={idx}>
          {renderContent(content)}
        </div>
      ))}
    </>
  );
};

export default RichTextRenderer;
