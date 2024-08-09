"use client";
import Button from "@/components/common/button/Button";
import { addToCart, setViewed } from "@/lib/features/products/productsSlice";
import { useAppDispatch } from "@/lib/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaEye, FaStar } from "react-icons/fa6";

type Props = {
  product: any;
};

const ProductItem = ({ product }: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  const handleView = (product: any) => {
    dispatch(setViewed(product));
    router.push(`/menu/${product._id}`);
  };
  return (
    <div className="flex items-center overflow-visible ml-12 py-5 pr-5 pl-14 border border-solid border-[#ddd] rounded-[15px] relative transition-all duration-500 group after:absolute after:top-0 after:left-0 after:w-0 after:bottom-0 hover:after:w-full hover:after:bg-themeLight after:transition-all after:duration-500 after:rounded-[15px]">
      <div className="w-[100px] h-[100px] rounded-full bg-white absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_5px_20px_0_rgb(23,44,82,0.1)]">
        <div
          className="w-[100px] h-[100px] rounded-full overflow-hidden"
          onClick={() => handleView(product)}
        >
          <div className="overflow-hidden w-[100px] h-[100px] relative transition-all duration-500 group-hover:scale-150">
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

          {product.old_price !== product.old_price && (
            <div className="text-white bg-green border border-solid border-green rounded-[100px] -top-4 right-3 absolute text-xs leading-4 py-1 px-3 font-bold">
              <span
                title={`-${Math.ceil(
                  ((product.old_price - product.new_price) /
                    product.old_price) *
                    100
                )}%`}
              >
                -
                {Math.ceil(
                  ((product.old_price - product.new_price) /
                    product.old_price) *
                    100
                )}
                %
              </span>
            </div>
          )}
        </div>

        <div className="absolute text-center z-20 opacity-0 top-[15px] right-[35px] transition-all duration-500 text-sm group-hover:opacity-100 group-hover:right-[15px]">
          <Button
            className="text-white !w-10 !h-10 !p-2 bg-theme border-theme hover:text-theme rounded-full flex justify-center items-center relative mb-2"
            onClick={() => handleView(product)}
          >
            <FaEye />
          </Button>
          <Button
            className="text-white !w-10 !h-10 !p-2 bg-theme border-theme hover:text-theme rounded-full flex justify-center items-center relative"
            onClick={() => handleAddToCart(product)}
          >
            <FaShoppingCart />
          </Button>
        </div>
      </div>

      <div className="w-full relative z-10 pr-[20%] p-1">
        <div
          title={product.name}
          className="py-[0.7%] block text-[17px] text-theme text-ellipsis line-clamp-1 font-semibold uppercase cursor-pointer"
          onClick={() => handleView(product)}
        >
          <p className="line-clamp-1">{product.name}</p>
        </div>
        <p className="line-clamp-1" title={product.description}>
          {product.description}
        </p>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-end">
          <span className="text-black text-xl font-bold">
            {(product.new_price / 1000).toFixed(3)}đ
          </span>
          {product.new_price !== product.old_price && (
            <del className="text-[#5b5b5b]">
              {(product.old_price / 1000).toFixed(3)}đ
            </del>
          )}
        </div>
        <div className="relative block">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow" />
            <FaStar className="text-yellow" />
            <FaStar className="text-yellow" />
            <FaStar className="text-yellow" />
            <FaStar className="text-yellow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
