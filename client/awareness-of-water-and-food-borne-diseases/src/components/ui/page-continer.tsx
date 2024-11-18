import { IPageContiner } from "general";
import Footer from "./footer";
import NavBar from "./navbar";

const PageContiner = ({ children }: IPageContiner) => {
  return (
    <div dir="rtl">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageContiner;
