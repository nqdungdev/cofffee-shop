import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import shapeLeft from "@/assets/images/shape18.png";
import shapeRight from "@/assets/images/shape19.png";

type Props = {};

const ProductCategory = (props: Props) => {
  return (
    <section className="-mt-[70px] pb-8 z-40 relative">
      <div className="container">
        <div className="relative grid grid-cols-2 lg:grid-cols-3 gap-2">
          {[
            {
              label: "Đồ ăn",
              image: "/uploads/source/product/maxican.png",
              link: "#",
            },
            {
              label: "Đồ uống",
              image: "/uploads/source/product/soft-drinks.png",
              link: "#",
            },
            {
              label: "Ăn vặt",
              image: "/uploads/source/product/french.png",
              link: "#",
            },
          ].map(
            (el, index) =>
              el && (
                <article
                  key={index}
                  className="relative mb-3 overflow-hidden rounded-[14px] min-h-[292px] flex flex-col shadow-[0_35px_40px_0_rgba(10,22,39,.1)] group"
                >
                  <div className="text-center bg-themeLight rounded-b-[30%] pt-10 px-4 pb-20">
                    <p className="text-[27px] font-bold text-center p-0 text-white mb-4 uppercase">
                      {el.label}
                    </p>
                    <Link
                      href={el.link}
                      className="relative border-2 border-solid border-[#fcb302] rounded-[30px] text-white py-2 px-4 text-sm font-semibold"
                    >
                      <FaArrowRight className="inline-block" />
                      <span className="ml-1">Xem menu</span>
                    </Link>
                  </div>

                  <div className="relative block text-center -mb-3 h-[252px] -mt-12 bg-[url('/uploads/source/background/danhmucsanpham.png')] bg-no-repeat bg-contain">
                    <Image
                      src={el.image}
                      alt={el.label}
                      title={el.label}
                      loading="lazy"
                      layout="fill"
                      objectFit="contain"
                    />

                    <Image
                      src={shapeLeft}
                      alt={el.label}
                      title={el.label}
                      loading="lazy"
                      width={60}
                      height={70}
                      className="absolute -top-[30px] left-[80px] scale-0 transition-all duration-300 group-hover:-top-[40px] group-hover:scale-100"
                    />
                    <Image
                      src={shapeRight}
                      alt={el.label}
                      title={el.label}
                      loading="lazy"
                      width={60}
                      height={70}
                      className="absolute -top-[30px] right-[80px] scale-0 transition-all duration-300 group-hover:-top-[40px] group-hover:scale-100"
                    />
                  </div>
                </article>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
