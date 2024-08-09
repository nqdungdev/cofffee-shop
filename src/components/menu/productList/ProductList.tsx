"use client";

import Pagination from "@/components/common/pagination/Pagination";
import ProductItem from "@/components/common/productItem/ProductItem";
import { useAppSelector } from "@/lib/hooks";
import { Dispatch, SetStateAction } from "react";

type Props = {};

const ProductList = (props: Props) => {
  const { filteredProducts } = useAppSelector((state) => state.productsReducer);

  return (
    <>
      <div className="mx-auto grid grid-cols-2 gap-4">
        {filteredProducts &&
          filteredProducts?.map(
            (product: any, index: number) =>
              filteredProducts && (
                <article key={index} className="col-span-2 md:col-span-1 px-3">
                  <ProductItem product={product} />
                </article>
              )
          )}
      </div>
      {filteredProducts && (
        <Pagination totalPage={Math.ceil(filteredProducts.length / 10)} />
      )}
    </>
  );
};

export default ProductList;
