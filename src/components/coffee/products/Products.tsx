import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type Props = {};

const Products = (props: Props) => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="relative overflow-hidden group">
          <div className="absolute -left-[60px] top-1/2 -translateY-1/2 z-10 w-10 h-10 leading-10 text-center bg-white cursor-pointer text-black opacity-0 rounded-md flex justify-center items-center transition-all duration-500 hover:bg-theme group-hover:left-3 group-hover:opacity-100 group/icon">
            <FaChevronLeft className="text-theme group-hover/icon:text-white transition-all duration-500" />
          </div>
          <div className="absolute -right-[60px] top-1/2 -translateY-1/2 z-10 w-10 h-10 leading-10 text-center bg-white cursor-pointer text-black opacity-0 rounded-md flex justify-center items-center transition-all duration-500 hover:bg-theme group-hover:right-3 group-hover:opacity-100 group/icon">
            <FaChevronRight className="text-theme group-hover/icon:text-white transition-all duration-500" />
          </div>

          <div className="relative bg-transparent overflow-hidden flex justify-start items-start gap-5">
            {[
              {
                title: "Robusta natural rang mộc",
                description: "Xuất xứ: Đắk Lắk, Việt Nam",
                image: "/uploads/source/coffee/robusta-natural3.jpg",
                link: "",
              },
              {
                title: "Arabica Đầu đất rang mộc",
                description: "Xuất xứ: Cầu Đất, Đà Lạt, Việt Nam",
                image: "/uploads/source/coffee/arabica-coffee.jpg",
                link: "",
              },
              {
                title:
                  "Cà phê Arabica Cầu Đất blend Robusta natural rang mộc phối trộn tỷ lệ vàng, cafe nguyên chất",
                description: "",
                image:
                  "/uploads/source/coffee/ca-phe-arabica-cau-dat-blend-robusta-natural-1024x1024.jpg",
                link: "",
              },
            ].map((el, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3">
                <div className="relative w-full h-[450px] sm:h-[350px] inline-block">
                  <Link href={el.link} className="w-full h-full">
                    <Image
                      src={el.image}
                      alt={el.title}
                      title={el.title}
                      loading="lazy"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Link>
                </div>
                <div className="w-[90%] mx-auto -mt-10 bg-theme p-4 relative z-10 transition-all duration-300">
                  <p className="mb-0 text-white font-bold text-[24px] leading-[36px]">
                    <Link href={el.link}>{el.title}</Link>
                  </p>
                  <div className="text-white font-normal mb-0 text-sm">
                    <p>{el.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
