import type { Metadata } from "next";

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
      <section className="min-h-[200px] h-[200px] text-center overflow-hidden">
        <div className="bg-[url(/uploads/source/background/coffee-background-1.jpg)] bg-cover w-full h-full">
          <div className="relative flex justify-center items-center w-full h-full after:absolute after:bg-black after:bg-opacity-50 after:left-0 after:top-0 after:w-full after:h-full">
            <h1 className="text-center text-[40px] text-white font-bold z-10">
              Liên hệ
            </h1>
          </div>
        </div>
      </section>

      <section className="m-0 bg-[#e6e6e6] py-3">
        <div className="container">{children}</div>
      </section>
    </main>
  );
}
