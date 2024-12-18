declare module "state" {
  import { availableLanguages } from "localization";
  import {
    ICampaignDefinition,
    IEventDocumentation,
    IGoal,
    IHealthEducation,
    IPartner,
    ITestYourKnowlodge,
    ITransmissionOfInfection,
    ITreatmentAndPrevention,
  } from "single-types";
  import {
    IAboutUs,
    IBanner,
    IReport,
    ITopic,
    IVideosAndPlays,
  } from "collection-types";

  interface IState {
    isLoading: boolean;
    error: string | null;
  }
  export interface IGlobalState extends IState {
    banner: IBanner[];
    local: availableLanguages;
  }
  export interface IHomeState extends IState {
    goal: IGoal | null;
    partners: IPartner | null;
    campaignDefinition: ICampaignDefinition | null;
  }
  export interface IEventsState extends IState {
    reports: IReport[];
    eventDocumentation: IEventDocumentation | null;
    videosAndPlays: IVideosAndPlays[];
    testYourKnowlodge: ITestYourKnowlodge | null;
  }
  export interface IScientificMaterialsState extends IState {
    healthEducation: IHealthEducation | null;
    topics: ITopic[];
    transmissionOfInfection: ITransmissionOfInfection | null;
    treatmentAndPrevention: ITreatmentAndPrevention | null;
    topic: ITopic | null;
  }
  export interface IAboutUsState extends IState {
    sections: IAboutUs[];
  }
}
