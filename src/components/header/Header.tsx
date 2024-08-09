"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBars, FaBasketShopping, FaUser } from "react-icons/fa6";
import Button from "../common/button/Button";
import { usePathname, useRouter } from "next/navigation";
import SearchBox from "./SearchBox";
import PayBox from "./PayBox";
import MenuBox from "./MenuBox";
import authApiRequest from "@/utils/requests";
import { handleErrorApi } from "@/utils/errors";

type Props = {
  accessToken: string;
};

const Header = ({ accessToken }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  console.log(accessToken);

  const [active, setActive] = useState<string>(
    pathname === "/" ? "" : `${pathname.split("/")[1]}`
  );
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isPay, setIsPay] = useState<boolean>(false);
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const categories = [
    { label: "Trang chủ", link: "/" },
    { label: "Thực đơn", link: "menu" },
    { label: "Về chúng tôi", link: "about-us" },
    { label: "Liên hệ", link: "contact" },
  ];

  const handleLogout = async (accessToken: string) => {
    try {
      await authApiRequest.callLogoutFromNextJsClientToNextJsServer();
      router.push("/login");
    } catch (error) {
      handleErrorApi({
        error,
      });
    }
  };
  return (
    <header id="header" className="fixed z-50 lg:absolute top-0 left-0 w-full">
      <div className="p-3 bg-white lg:bg-transparent h-[100px]">
        <div className="container h-full">
          <div className="grid grid-cols-12 h-full">
            <nav className="hidden lg:block col-span-5 text-left px-3">
              <div className="mt-3 flex gap-2">
                {[
                  {
                    label: "Facebook",
                    image: "/uploads/source/icon/group-1.png",
                    link: "https://www.facebook.com/",
                  },
                  {
                    label: "Twitter",
                    image: "/uploads/source/icon/twitter-1.png",
                    link: "https://twitter.com/home",
                  },
                  {
                    label: "Youtube",
                    image: "/uploads/source/icon/youtube-1.png",
                    link: "https://www.youtube.com/",
                  },
                  {
                    label: "Instagram",
                    image: "/uploads/source/icon/instagram-1.png",
                    link: "https://www.instagram.com/",
                  },
                  {
                    label: "Pinterest",
                    image: "/uploads/source/icon/pinterest.png",
                    link: "https://www.pinterest.com/",
                  },
                ].map((el, index) => (
                  <Link key={index} href={el.link} target="_blank">
                    <Image
                      src={el.image}
                      alt={el.label}
                      title={el.label}
                      loading="lazy"
                      width={32}
                      height={32}
                      style={{ objectFit: "contain" }}
                    />
                  </Link>
                ))}
              </div>
            </nav>

            <div className="col-span-5 flex items-center lg:hidden">
              <Button
                className="text-white !w-10 !h-10 !p-2 bg-theme border-theme hover:text-theme rounded-full flex justify-center items-center relative"
                onClick={() => setIsMenu(true)}
              >
                <FaBars />
              </Button>
            </div>

            <div className="col-span-2 text-center flex items-center justify-center px-3 relative w-full h-full">
              <Link href="/" title="Coffee">
                <Image
                  src="/uploads/source/logo/logo.png"
                  alt="Coffee"
                  title="Coffee"
                  loading="lazy"
                  width={76}
                  height={76}
                />
              </Link>
            </div>

            <div className="col-span-5 text-left justify-end gap-4 px-3 hidden lg:flex">
              {[
                {
                  title: "Hệ thống",
                  content: "Cửa hàng",
                  icon: "/uploads/source/icon/icon-store.png",
                  link: "branch",
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
                    <div
                      key={index}
                      className="relative flex items-center gap-1"
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-xl bg-white/80 w-full h-full"></div>
                      <div className="relative w-8 h-8">
                        <Image
                          src={el.icon}
                          alt={el.title}
                          title={el.title}
                          loading="lazy"
                          width={32}
                          height={32}
                        />
                      </div>

                      <div className="relative">
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

            <div className="lg:hidden col-span-5 flex justify-end items-center gap-3">
              <Button
                className="text-white !w-10 !h-10 !p-2 bg-theme border-theme hover:text-theme rounded-full flex justify-center items-center relative"
                onClick={() => setIsSearch(true)}
              >
                <FaSearch />
              </Button>

              <div className="relative">
                <Button
                  className="text-white !w-10 !h-10 !p-2 bg-theme border-theme hover:text-theme rounded-full flex justify-center items-center relative"
                  onClick={() => setIsPay(true)}
                >
                  <FaBasketShopping />
                </Button>
                <span className="absolute -top-1 right-4 text-white bg-headerItem text-xs leading-4 px-1 py-0 rounded-full z-20">
                  0
                </span>
              </div>

              {accessToken ? (
                <div className="relative group">
                  <Button
                    className="text-white !w-10 !h-10 !p-2 bg-theme border-theme hover:text-theme rounded-full flex justify-center items-center relative"
                    onClick={() => router.push("/profile")}
                  >
                    <Image
                      src="/uploads/source/logo/logo.png"
                      alt="Coffee"
                      title="Coffee"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                  </Button>
                  <div className="absolute top-[calc(100%_+_8px)] right-0 w-[200px] h-max bg-white border border-solid border-theme after:absolute after:bottom-full after:right-2 after:w-0 after:h-0 after:border-[10px] after:border-transparent after:border-solid after:border-b-theme transition-all duration-300 opacity-0 collapse group-hover:visible group-hover:opacity-100 rounded-md">
                    <ul className="flex flex-col text-txt items-center">
                      {[
                        { label: "Tài khoản của tôi", link: "/profile" },
                        { label: "Đơn mua", link: "/profile" },
                        { label: "Đăng xuất", link: "/logout" },
                      ].map((el, index) => (
                        <li key={index} className="py-3 group/item">
                          <Button
                            className="group-hover/item:!text-theme transition-all duration-300 !capitalize !bg-transparent !border-0 !text-base !font-normal !w-max !text-txt hover:!bg-transparent !p-0"
                            onClick={() => {
                              if (el.link === "/logout")
                                return handleLogout(accessToken);
                              router.push(`/${el.link}`);
                            }}
                          >
                            {el.label}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Button
                  className="text-white !w-10 !h-10 !p-2 bg-theme border-theme hover:text-theme rounded-full flex justify-center items-center relative"
                  onClick={() => router.push("/login")}
                >
                  <FaUser />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <nav className="container lg:justify-between lg:items-center hidden lg:flex">
        <ul className="flex">
          {categories?.map(
            (el, index) =>
              el && (
                <li
                  key={index}
                  className="relative group"
                  onClick={() => setActive(el.link)}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-xl bg-white/80 w-full h-full"></div>
                  <Link
                    target="_self"
                    className={`relative text-txt p-5 text-base font-bold inline-block uppercase rounded-full
                  ${
                    active === el.link
                      ? "after:opacity-100 after:left-0 text-txtHover"
                      : "after:opacity-0 after:left-1"
                  } after:absolute after:top-1/2 after:w-3 after:h-3 after:bg-theme after:rounded-full after:-translate-y-1/2 after:transition-all after:duration-300 group-hover:after:opacity-100 group-hover:after:left-0 group-hover:text-txtHover
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
          <Button
            className="text-white !w-8 !h-8 !p-2 bg-theme border-theme hover:text-theme rounded-full flex justify-center items-center relative"
            onClick={() => setIsSearch(true)}
          >
            <FaSearch />
          </Button>

          <div className="relative">
            <Button
              className="text-white !w-8 !h-8 !p-2 bg-theme border-theme hover:text-theme rounded-full flex justify-center items-center relative overflow-auto"
              onClick={() => setIsPay(true)}
            >
              <FaBasketShopping />
            </Button>
            <span className="absolute -top-1 right-4 text-white bg-headerItem text-xs leading-4 px-1 py-0 rounded-full z-20">
              0
            </span>
          </div>

          {accessToken ? (
            <div className="relative group">
              <Button
                className="text-white !w-8 !h-8 !p-2 bg-theme border-theme hover:text-theme rounded-full flex justify-center items-center relative"
                onClick={() => router.push("/profile")}
              >
                <Image
                  src="/uploads/source/logo/logo.png"
                  alt="Coffee"
                  title="Coffee"
                  loading="lazy"
                  width={40}
                  height={40}
                />
              </Button>
              <div className="absolute top-[calc(100%_+_8px)] right-0 w-[200px] h-max bg-white border border-solid border-theme after:absolute after:bottom-full after:right-2 after:w-0 after:h-0 after:border-[10px] after:border-transparent after:border-solid after:border-b-theme transition-all duration-300 opacity-0 collapse group-hover:visible group-hover:opacity-100 rounded-md">
                <ul className="flex flex-col text-txt items-center">
                  {[
                    { label: "Tài khoản của tôi", link: "/profile" },
                    { label: "Đơn mua", link: "/profile" },
                    { label: "Đăng xuất", link: "/logout" },
                  ].map((el, index) => (
                    <li key={index} className="py-3 group/item">
                      <Button
                        className="group-hover/item:!text-theme transition-all duration-300 !capitalize !bg-transparent !border-0 !text-base !font-normal !w-max !text-txt hover:!bg-transparent !p-0"
                        onClick={() => {
                          if (el.link === "/logout")
                            return handleLogout(accessToken);
                          router.push(`/${el.link}`);
                        }}
                      >
                        {el.label}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <Button
              className="text-white !w-8 !h-8 !p-2 bg-theme border-theme hover:text-theme rounded-full flex justify-center items-center relative"
              onClick={() => router.push("/login")}
            >
              <FaUser />
            </Button>
          )}
        </div>
      </nav>

      <SearchBox useSearch={[isSearch, setIsSearch]} />

      <PayBox usePay={[isPay, setIsPay]} />

      <MenuBox useMenu={[isMenu, setIsMenu]} categories={categories} />
    </header>
  );
};

export default Header;
