import Breadcrumbs from "@/components/common/breadcrumbs/Breadcrumbs";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Danh sách chi nhánh",
};

export default async function BranchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-white text-black pt-[165px]">
      <Breadcrumbs location={{ title: "Chi nhánh", link: "/branch" }} />
      <section className="container mt-4">
        <div className="mb-3">
          <h1 className="text-[40px] text-theme leading-[1.5] font-bold text-center">
            Danh sách cửa hàng
          </h1>
        </div>
        <Suspense>{children}</Suspense>
      </section>
    </main>
  );
}
