import { Image } from "@nextui-org/image";
import Link from "next/link";
import {
  FaTiktok,
  FaFacebook,
  FaTelegram,
  FaInstagram,
  FaPhone,
  FaRegEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-secondary  px-6 py-2">
      <div className="flex justify-between items-center w-full text-white">
        <div>
          <p>تصفح المزيد:</p>
          <ul>
            <li>تعلم عن الامراض التي تنتقل عن طريق المياه والغذاء</li>
            <li>مقالات عن اخر اخبار الحملة</li>
            <li>تعرف على الحملة</li>
            <li>ادعمنا عن طريق التبرع</li>
            <li className="flex items-center gap-4">
              تواصل معنا:
              <ul className="flex items-center gap-2">
                <li>
                  <Link href="https://www.tiktok.com">
                    <FaTiktok />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com">
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.telegram.com">
                    <FaTelegram />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagrm.com">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaPhone />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaRegEnvelope />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <Image src="/team_logo.png" alt="logo" className="w-72" />
        </div>
      </div>
      <p dir="ltr" className="text-xs text-[#2D3036]">
        © 2024 ID_PAT. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
