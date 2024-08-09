"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const Slider = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const next = (currentSlide + 1) % 2;
    const id = setTimeout(() => handleShowSlides(next), 5000);

    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const handleShowSlides = (index: number) => {
    (slideRef.current as HTMLDivElement).children[currentSlide].classList.add(
      "animate-fadeOut"
    );
    setTimeout(() => setCurrentSlide(index), 900);
  };

  return (
    <section className="relative -mt-[170px]">
      <div
        className="relative h-[690px] w-full"
        style={{ position: "relative" }}
      >
        <div ref={slideRef} className="h-full">
          {[
            { image: "/uploads/source/slider/slider1.jpg" },
            { image: "/uploads/source/slider/slider2.jpg" },
          ].map(
            (el, index) =>
              el && (
                <div
                  key={index}
                  className={`relative w-full h-full duration-700 ease-in-out rounded-lg overflow-hidden ${
                    currentSlide === index
                      ? "block animate-fadeIn"
                      : "hidden animate-fadeOut"
                  }`}
                >
                  <Image
                    src={el.image}
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="100vw"
                    quality={100}
                    unoptimized={true}
                  />
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Slider;
