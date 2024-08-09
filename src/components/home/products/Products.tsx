"use client";
import Link from "next/link";
import React from "react";
import ProductItem from "@/components/common/productItem/ProductItem";
import useSWR from "swr";
import Skeleton from "@/components/common/skeleton/Skeleton";
import { useAppDispatch } from "@/lib/hooks";
import { setProducts } from "@/lib/features/products/productsSlice";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Props = {};

const Product = (props: Props) => {
  const dispatch = useAppDispatch();
  const { data: products, isLoading } = useSWR(`/api`, fetcher, {
    onSuccess: (fetchedData) => dispatch(setProducts(fetchedData)),
  });

  return (
    <section className="bg-[url('/uploads/source/background/coffee-splatter.png')] bg-cover bg-no-repeat bg-center bg-fixed bg-white/80 bg-blend-color-burn py-12 relative">
      <div className="container">
        <div className="relative ">
          <div className="text-center mb-8">
            <p className="mb-4 text-green text-base leading-8">Menu Đặc biệt</p>
            <p className="text-center relative block text-theme text-[30px] leading-[30px] font-bold">
              MENU GỜ COFFEE
            </p>
          </div>

          <div className="text-center">
            <ul className="mb-5 pb-5 inline-flex overflow-auto justify-center flex-wrap">
              {["Coffee", "Trà sữa", "Nước ép", "Sữa chua", "Trà trái cây"].map(
                (el, index) =>
                  el && (
                    <li
                      key={index}
                      className="p-0 mr-3 h-10 inline-block relative w-max group"
                    >
                      <Link
                        href="menu"
                        className="text-theme bg-white py-1 px-6 block rounded-[15px] border border-solid border-[#ddd] transition-all duration-500 uppercase font-bold group-hover:text-white group-hover:bg-theme"
                      >
                        {el}
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>

        <div className="mx-auto grid grid-cols-2 gap-4">
          {isLoading
            ? [...Array(6)].map((_, index) => (
                <article key={index} className="col-span-2 md:col-span-1 px-3">
                  <Skeleton />
                </article>
              ))
            : products?.map(
                (product: any, index: number) =>
                  index < 6 && (
                    <article
                      key={index}
                      className="col-span-2 md:col-span-1 px-3"
                    >
                      <ProductItem product={product} />
                    </article>
                  )
              )}
        </div>
      </div>
    </section>
  );
};

export default Product;
