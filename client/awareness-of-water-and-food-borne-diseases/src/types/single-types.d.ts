declare module "single-types" {
  import { IContentNode, IStrapiImage } from "general";
  export interface ICampaignDefinition {
    id: number;
    definition: string;
  }

  export interface IGoal {
    id: number;
    documentId?: string;
    title: string;
    content: IContentNode[];
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    locale?: string;
  }

  export interface IPartner {
    image: IStrapiImage[];
  }

  export interface IEventDocumentation {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    images: IStrapiImage[];
  }
  export interface ITestYourKnowlodge {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    images: IStrapiImage[];
  }
  export interface IHealthEducation {
    id: number;
    title: string;
    content: IContentNode[];
  }

  export interface ITransmissionOfInfection {
    id: number;
    title: string;
    content: IContentNode[];
  }

  export interface ITreatmentAndPrevention {
    id: number;
    title: string;
    content: IContentNode[];
  }
}
