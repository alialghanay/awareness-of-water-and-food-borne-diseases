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
    title: string;
    brief_description: string;
    description: string;
    brief_description: IContentNode;
    image: IStrapiImage;
    icon: IStrapiImage;
    image_title: string;
    attachments: null;
  }
  export interface IVideosAndPlays {}
}
