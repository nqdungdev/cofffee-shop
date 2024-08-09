import type { Metadata } from "next";
import { Oswald, Josefin_Sans } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import StoreProvider from "./StoreProvider";
import Link from "next/link";
import { FaChevronUp } from "react-icons/fa6";
import { cookies } from "next/headers";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Gờ coffee", template: "Gờ coffee | %s" },
  description: "Gờ coffee website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");
  return (
    <html lang="en" className="scroll-smooth">
      <body className={josefinSans.className}>
        <StoreProvider>
          <Header accessToken={accessToken?.value ?? ""} />
          {children}
        </StoreProvider>

        <Footer />

        <Link
          href="#header"
          className="w-[50px] h-[50px] rounded-full bg-themeLight flex justify-center items-center fixed bottom-5 right-5 text-lg z-50 text-white"
        >
          <FaChevronUp />
        </Link>
      </body>
    </html>
  );
}
