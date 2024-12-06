import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const cairo = localFont({
  src: "./fonts/Cairo.ttf",
  variable: "--font-cairo",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "التوعية بالامراض المنقولة عبر الماء والغذاء",
  description:
    "في السابع من أكتوبر عام 2023 شنت قوات الاحتلال الإسرائيلية حربًا لم يشهد لها التاريخ مثيل على قطاع غزة والضفة الغربية. ونتيجةً لهذا العدوان الغاشم، تم تهجير معظم السكان من منازلهم ومن مناطقهم إلى مناطق أخرى وتُقدِّر المنظمات الإغاثية أنَّ أكثر من ٩٠ بالمائة من السكان تهجروا، لجأ أكثر من نصفهم إلى مراكز إيواء رسمية (مدارس وكالة الغوث الدولية وبعض منشآتها، بالإضافة إلى المستشفيات) ومراكز إيواء عشوائية أقامها النازحون أنفسهم بما توفر من أدوات وأقمشة. ",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={`${cairo.variable}`}>
        {<Providers>{children}</Providers>}
      </body>
    </html>
  );
}

export default RootLayout;
