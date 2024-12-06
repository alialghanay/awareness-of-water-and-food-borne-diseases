"use client";
import { Image } from "@nextui-org/image";
import data from "@/lib/jsons/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const { ar, socials } = data;
  const { pages } = ar;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center bg-white shadow-md px-8">
      {/* Hamburger Icon */}
      <div className="sm:hidden p-4">
        <button onClick={toggleSidebar}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {/* Logo in small screens */}
      <Link href="/" className="hidden sm:block">
        <Image src="/logo.png" alt="logo" />
      </Link>
      {/* small screen sidebar */}
      <aside
        className={`fixed bottom-0 left-0 w-full bg-card rounded-t-2xl shadow transform transition-all duration-500 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } h-[85dvh] z-20 flex flex-col justify-between items-center p-4`}
      >
        {/* Logo & routes */}
        <div className="flex flex-col justify-center items-center gap-6">
          <ul className="flex flex-col justify-center items-center gap-4">
            {pages.map((page, index) => (
              <li
                key={index}
                className={
                  pathname == page.url ? "text-primary" : "hover:text-primary"
                }
              >
                <Link href={page.url}>{page.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Socials */}
        <div>
          <ul className="flex justify-center items-center gap-4">
            {socials.map((social, index) => (
              <li key={index}>
                <Link href={social.url}>
                  {<social.icon className="scale-150 text-primary" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      {/* large screen nav */}
      <nav className="hidden sm:flex justify-between items-center w-full">
        {/* Logo & routes */}
        <div className="flex justify-center items-center gap-6">
          <ul className="flex justify-center items-center gap-4">
            {pages.map((page, index) => (
              <li
                key={index}
                className={
                  pathname == page.url ? "text-primary" : "hover:text-primary"
                }
              >
                <Link href={page.url}>{page.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Socials */}
        <div>
          <ul className="flex justify-center items-center gap-4">
            {socials.map((social, index) => (
              <li key={index}>
                <Link href={social.url}>
                  {<social.icon className="scale-150 text-primary" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
