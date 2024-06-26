"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch, FaTimes, FaTrashAlt } from "react-icons/fa";
import { FaBasketShopping, FaMinus, FaPlus } from "react-icons/fa6";
import Button from "../common/button/Button";
import { usePathname } from "next/navigation";
import SearchBox from "./SearchBox";
import PayBox from "./PayBox";

type Props = {};

const Header = (props: Props) => {
  const pathname = usePathname();

  const [active, setActive] = useState<string>(
    pathname === "/" ? "" : `${pathname.split("/")[1]}`
  );
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isPay, setIsPay] = useState<boolean>(false);

  return (
    <header
      id="header"
      className="hidden lg:block z-50 absolute top-0 left-0 w-full"
    >
      <div className="p-3 bg-transparent h-[100px]">
        <div className="container h-full">
          <div className="grid grid-cols-12 h-full">
            <nav className="col-span-5 text-left px-3">
              <div className="mt-3 flex gap-2">
                {[
                  {
                    label: "Facebook",
                    image: "/uploads/source/icon/group-1.png",
                    link: "#",
                  },
                  {
                    label: "Twitter",
                    image: "/uploads/source/icon/twitter-1.png",
                    link: "#",
                  },
                  {
                    label: "Youtube",
                    image: "/uploads/source/icon/youtube-1.png",
                    link: "#",
                  },
                  {
                    label: "Instagram",
                    image: "/uploads/source/icon/instagram-1.png",
                    link: "#",
                  },
                  {
                    label: "Pinterest",
                    image: "/uploads/source/icon/google-plus-1.png",
                    link: "#",
                  },
                ].map((el, index) => (
                  <Link key={index} href={el.link}>
                    <Image
                      src={el.image}
                      alt={el.label}
                      title={el.label}
                      loading="lazy"
                      width={32}
                      height={32}
                    />
                  </Link>
                ))}
              </div>
            </nav>

            <div className="col-span-2 text-center logo px-3 relative w-full h-full">
              <Link href="/" title="Coffee">
                <Image
                  src="/uploads/source/logo/logo.png"
                  alt="Coffee"
                  title="Coffee"
                  loading="lazy"
                  layout="fill"
                  objectFit="contain"
                />
              </Link>
            </div>

            <div className="col-span-5 text-left flex justify-end gap-4 px-3">
              {[
                {
                  title: "Hệ thống",
                  content: "Cửa hàng",
                  icon: "/uploads/source/icon/icon-store.png",
                  link: "store",
                },
                {
                  title: "Hotline hỗ trợ",
                  content: "0123 456 789",
                  icon: "/uploads/source/icon/support.svg",
                  link: "tel:0123 456 789",
                },
              ].map(
                (el, index) =>
                  el && (
                    <div key={index} className="flex items-center gap-1">
                      <Image
                        src={el.icon}
                        alt={el.title}
                        title={el.title}
                        loading="lazy"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="text-theme mb-1 text-base leading-4">
                          {el.title}
                        </p>
                        <h3 className="text-xl leading-5">
                          <Link
                            className="text-headerItem text-xl font-bold"
                            href={el.link}
                          >
                            {el.content}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>

      <nav className="container flex justify-between items-center">
        <ul className="flex">
          {[
            { label: "Trang chủ", link: "" },
            { label: "Cà phê", link: "coffee" },
            { label: "Thực đơn", link: "menu" },
            { label: "Về chúng tôi", link: "about-us" },
            { label: "Liên hệ", link: "contact" },
          ].map(
            (el, index) =>
              el && (
                <li
                  key={index}
                  className="group"
                  onClick={() => setActive(el.link)}
                >
                  <Link
                    target="_self"
                    className={`relative text-navTxt p-5 text-base font-bold inline-block uppercase  
                  ${
                    active === el.link
                      ? "after:opacity-100 after:left-0 text-navTxtHover"
                      : "after:opacity-0 after:left-1"
                  } after:absolute after:top-1/2 after:w-3 after:h-3 after:bg-theme after:rounded-full after:-translate-y-1/2 after:transition-all after:duration-300 group-hover:after:opacity-100 group-hover:after:left-0 group-hover:text-navTxtHover
                    group-hover:after:transition-all group-hover:after:duration-300`}
                    href={el.link}
                  >
                    <span>{el.label}</span>
                  </Link>
                </li>
              )
          )}
        </ul>

        <div className="flex items-center gap-5">
          <button
            className="text-white w-8 h-8 p-2 bg-theme rounded-full flex justify-center items-center relative"
            onClick={() => setIsSearch(true)}
          >
            <FaSearch />
          </button>
          <button
            className="text-white w-8 h-8 p-2 bg-theme rounded-full flex justify-center items-center relative"
            onClick={() => setIsPay(true)}
          >
            <FaBasketShopping />
            <span className="absolute -top-1 right-1 text-white bg-headerItem text-xs leading-4 px-1 py-0 rounded-full">
              0
            </span>
          </button>
        </div>
      </nav>

      <SearchBox useSearch={[isSearch, setIsSearch]} />

      <PayBox usePay={[isPay, setIsPay]} />
    </header>
  );
};

export default Header;
