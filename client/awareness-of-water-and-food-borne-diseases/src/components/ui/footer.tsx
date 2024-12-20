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
            <li>
              <Link href="/scientific-materials">
                تعلم عن الامراض التي تنتقل عن طريق المياه والغذاء
              </Link>
            </li>
            <li>
              <Link href="/events">مقالات عن اخر اخبار الحملة</Link>
            </li>
            <li>
              <Link href="/about-us">تعرف على الحملة</Link>
            </li>
            <li>
              <Link href="/donate">ادعمنا عن طريق التبرع</Link>
            </li>
            <li className="flex items-center gap-4">
              تواصل معنا:
              <ul className="flex items-center gap-2">
                <li>
                  <Link href="https://WWW.tiktok.com/@id_pat_palestine">
                    <FaTiktok />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/profile.php?id=61563074465999&mibextid=ZbWKwL">
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link href="https://t.me/IDPAT1">
                    <FaTelegram />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/prof_abdelraouf_elmanama?igsh=MTFqcnVzaHlkcDN6OA==">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaPhone />
                  </Link>
                </li>
                <li>
                  <Link href="mailto:elmanama@iugaza.edu.ps" target="_blank">
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
