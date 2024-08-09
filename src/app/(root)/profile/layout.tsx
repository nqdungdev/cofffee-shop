import type { Metadata, ResolvingMetadata } from "next";
import { cookies } from "next/headers";

type Props = {
  params: { id: string };
};

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
// read route params
//   const id = params.id;

//   const product = await fetch(
//     `${process.env.NEXT_PUBLIC_TMDB_URL}/movie/${id}?language=vi&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
//   ).then((res) => res.json());

// optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: product.title,
//     openGraph: {
//       images: ["/images/vercel.svg", ...previousImages],
//     },
//   };
// }

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");
  console.log(accessToken);
  return (
    <main className="bg-white text-black pt-[165px]">
      <div className="container">{children}</div>
    </main>
  );
}
