"use client";
import { Image } from "@nextui-org/image";
import data from "@/lib/jsons/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const { ar, socials } = data;
  const { pages } = ar;
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center bg-white shadow-md px-8">
      <nav className="flex justify-center items-center gap-6">
        <Link href="/">
          <Image src="/logo.png" alt="logo" />
        </Link>
        <ul className="flex justify-center items-center gap-4">
          {pages.map((page, index) => (
            <li
              key={index}
              className={pathname == page.url ? "text-primary" : ""}
            >
              <Link href={page.url}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
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
    </header>
  );
};

export default NavBar;
