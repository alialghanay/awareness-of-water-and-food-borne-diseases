import { FaFacebook } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default {
  ar: {
    pages: [
      {
        title: "مواد العلمية",
        url: "/scientific-materials",
      },
      {
        title: "الفاعليات والانشطة",
        url: "/events",
      },
      {
        title: "ادعمنا",
        url: "/support-us",
      },
      {
        title: "من نحن؟",
        url: "/about-us",
      },
    ],
  },
  en: {
    pages: [
      {
        title: "Scientific Materials",
        url: "/scientific-materials",
      },
      {
        title: "Events",
        url: "/events",
      },
      {
        title: "Support Us",
        url: "/support-us",
      },
      {
        title: "About Us",
        url: "/about-us",
      },
    ],
  },
  socials: [
    {
      title: "Telegram",
      url: "https://www.telegram.com",
      icon: FaTelegram,
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com",
      icon: FaFacebook,
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com",
      icon: FaInstagram,
    },
    {
      title: "Tiktok",
      url: "https://www.tiktok.com",
      icon: FaTiktok,
    },
  ],
};
