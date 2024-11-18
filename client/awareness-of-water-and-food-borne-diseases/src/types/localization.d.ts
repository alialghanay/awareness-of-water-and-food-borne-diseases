declare module "localization" {
  type availableLanguages = "en" | "ar";
  type locale = {
    [key: string]: string;
  };
  type localization = {
    [key in availableLanguages]: locale;
  };
}
