declare module "collection-types" {
  import { IContentNode, IStrapiImage } from "general";
  export interface IAboutUs {
    id: number;
    title: string;
    paragraph: string;
    btn: boolean | null;
    icon?: IStrapiImage;
    coustom_text: IContentNode[] | null;
  }
  export interface IBanner {
    id: number;
    background: IStrapiImage;
    description: string;
  }
  export interface IReport {
    id: number;
    title: string;
    brief_description: string;
    description: string;
    brief_description: IContentNode;
    image: IStrapiImage;
    icon: IStrapiImage;
    image_title: string;
    attachments: null;
  }
  export interface ITopic {
    id: number;
    documentId: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    brief_description: string;
    description: string;
    sections: string;
    image_title: string;
    icon: IStrapiImage;
    image: IStrapiImage[] | null;
    attachment: null;
  }
  export interface IVideosAndPlays {
    id: number;
    title: string;
    video: IStrapiImage;
  }
}
