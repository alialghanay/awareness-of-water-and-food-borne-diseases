declare module "promises" {
  interface StrapiBaseResponse<T> {
    id: number;
    attributes: T;
  }

  interface StrapiResponse<T> {
    data: StrapiBaseResponse<T>;
    meta?: {
      pagination?: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }

  interface StrapiListResponse<T> {
    data: StrapiBaseResponse<T>[];
    meta?: {
      pagination?: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }

  interface StrapiError {
    statusCode: number;
    error: string;
    message: string;
  }

  export interface StrapiErrorResponse {
    data: StrapiError;
  }

  export interface CampaignDefinitionRespon
    extends StrapiBaseResponse<ICampaignDefinition> {}
}
