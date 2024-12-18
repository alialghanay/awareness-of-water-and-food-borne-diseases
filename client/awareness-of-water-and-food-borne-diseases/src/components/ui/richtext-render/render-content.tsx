import { IContentNode, IListItemNode } from "general";
import renderTextNode from "./render-text-node";

const renderContent = (content: IContentNode | IListItemNode) => {
  if (content.type === "paragraph") {
    const onlyTextNodes = content.children.every(
      (child) => child.type === "text"
    );

    if (onlyTextNodes) {
      return (
        <p>
          {content.children.map((child, idx) =>
            child.type === "text" ? renderTextNode(child, idx) : null
          )}
        </p>
      );
    }

    return (
      <div>
        {content.children.map((child, idx) =>
          child.type === "text" ? renderTextNode(child, idx) : null
        )}
      </div>
    );
  }

  if (content.type === "list") {
    const ListTag = content.format === "ordered" ? "ol" : "ul";
    return (
      <ListTag className="list-disc list-inside marker:text-primary">
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
