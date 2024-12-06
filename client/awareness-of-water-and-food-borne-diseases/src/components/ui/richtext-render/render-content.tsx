import { IContentNode } from "general";
import renderTextNode from "./render-text-node";

const renderContent = (content: IContentNode) => {
  if (content.type === "paragraph") {
    return (
      <p className="mb-4">
        {content.children.map((child, idx) =>
          child.type === "text" ? renderTextNode(child, idx) : null
        )}
      </p>
    );
  }

  if (content.type === "list") {
    const ListTag = content.format === "ordered" ? "ol" : "ul";
    return (
      <ListTag className="llist-disc  list-inside list-disc marker:text-primary">
        {content.children.map((child, index) => {
          if (child.type === "list-item") {
            return (
              <li key={index}>
                {child.children.map((textNode, index) =>
                  textNode.type === "text"
                    ? renderTextNode(textNode, index)
                    : null
                )}
              </li>
            );
          }
          return null;
        })}
      </ListTag>
    );
  }

  return null;
};

export default renderContent;
