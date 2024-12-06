import { IPageContiner } from "general";
import Footer from "./footer";
import NavBar from "./navbar";
import { GetBanner } from "@/lib/features/action";
import BannerDispatcher from "./banner-dispatcher";

const PageContiner = async ({ children }: IPageContiner) => {
  const banner = await GetBanner();
  return (
    <div dir="rtl">
      <BannerDispatcher banner={banner} />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageContiner;
