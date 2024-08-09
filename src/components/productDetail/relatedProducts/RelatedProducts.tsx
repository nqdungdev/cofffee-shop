"use client";

import ProductItem from "@/components/common/productItem/ProductItem";
import { useParams } from "next/navigation";
import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Props = {};

const RelatedProducts = (props: Props) => {
  const params = useParams();

  const { data: products, isLoading } = useSWR(`/menu/api/related`, fetcher);

  return (
    <section className="p-3 mb-3">
      <h3 className="text-[25px] leading-[30px] my-5 text-[#000] font-bold uppercase">
        Sản Phẩm Liên Quan
      </h3>

      <div className="grid grid-cols-2 gap-2">
        {products?.map(
          (product: any, index: number) =>
            products && (
              <article key={index} className="col-span-2 md:col-span-1 px-3">
                <ProductItem product={product} />
              </article>
            )
        )}
      </div>
    </section>
  );
};

export default RelatedProducts;
