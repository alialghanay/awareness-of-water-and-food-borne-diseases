declare module "general" {
  interface IPageContiner {
    children: React.ReactNode;
  }
  interface ICard {
    image: string;
    title: string;
    href?: string;
    description?: string;
    onClick?: () => void;
    onUrlClick?: () => void;
    classname?: string;
    buttonString?: string;
    isImageLocal?: boolean;
    isCursorCard?: boolean;
  }
  interface IBanner {
    src: string;
    description: string;
    isLoading?: boolean;
  }
  interface ISectionTitle {
    title: string;
    className?: string;
  }
  interface IReportCard {
    date: string;
    title: string;
    image: string;
    onClick: () => void;
    buttonString?: string;
  }
  interface IImageViewer {
    src: string;
    alt: string;
  }
  interface IPagination {
    count: number;
    currentPage: number;
    setCurrentPage: () => void;
  }
  interface IAboutUs {
    title: string;
    description: string;
    icon?: string;
    btn: boolean;
    coustom_text?: string;
  }

  export interface IStrapiImage {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
      };
    };
    url: string;
  }

  export interface ITextNode {
    type: "text";
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
  }

  interface IListItemNode {
    type: "list-item";
    children: ITextNode[];
  }

  interface IContentNode {
    type: "paragraph" | "list";
    format?: "unordered" | "ordered";
    children: (ITextNode | IListItemNode)[];
  }
}
