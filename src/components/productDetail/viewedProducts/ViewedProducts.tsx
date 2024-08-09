"use client";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const ViewedProducts = (props: Props) => {
  const { viewed } = useAppSelector((state) => state.productsReducer);
  return (
    <section className="border border-solid border-themeLight rounded-md">
      <div className="pt-4 px-3 pb-1 mb-3">
        <p className="text-center m-0 text-xl font-bold uppercase text-[#333] my-4 leading-5">
          Sản Phẩm Đã Xem
        </p>
      </div>

      <div className="px-3 overflow-hidden p-3">
        {viewed?.map(
          (product: any, index: number) =>
            product && (
              <article key={index} className="mb-3 flex gap-2">
                <Link href={`/menu/${product._id}`}>
                  <div className="relative w-[75px] h-[75px] rounded-md overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      title={product.name}
                      loading="lazy"
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="10vw"
                    />
                  </div>
                </Link>

                <div className="m-0 flex flex-col justify-between">
                  <h3 className="text-base text-theme leading-[1.4] tracking-[0.01em] mb-3">
                    <Link href={`/menu/${product._id}`} title={product.name}>
                      <p className="line-clamp-1">{product.name}</p>
                    </Link>
                  </h3>
                  <p className="text-xl font-bold text-red leading-[25px] flex gap-2 items-end">
                    <span className="text-[#ff5c5f]">
                      {(product.new_price / 1000).toFixed(3)}đ
                    </span>
                    <del className="text-[#5b5b5b] text-sm">
                      {(product.old_price / 1000).toFixed(3)}đ
                    </del>
                  </p>
                </div>
              </article>
            )
        )}
      </div>
    </section>
  );
};

export default ViewedProducts;
