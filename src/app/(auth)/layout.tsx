import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "@/app/globals.css";
import { ToastContainer } from "react-toastify";

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
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <main className="min-h-screen text-black bg-[url('/uploads/source/background/cafe-background-vintage-coffee.jpg')] bg-cover bg-no-repeat overflow-hidden">
          {children}
        </main>
        <ToastContainer />
      </body>
    </html>
  );
}
