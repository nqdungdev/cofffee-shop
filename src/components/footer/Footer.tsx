import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight, FaPaperPlane } from "react-icons/fa6";
import Copyright from "./Copyright";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-[url('/uploads/source/background/footer-bg.png')] bg-cover bg-no-repeat">
      <div className="container">
        <div className="py-12 grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-4 mb-3">
            <div className="mb-3">
              <p className="text-white relative pb-4 mb-4 text-md font-bold leading-6">
                GỜ COFFEE
              </p>
            </div>
            <p className="text-base text-white mb-4 text-justify">
              Bằng cách cung cấp các sản phẩm và dịch vụ chất lượng, nhanh
              chóng, đáng tin cậy, và chuyên nghiệp, GỜ mong muốn cung cấp cho
              khách hàng một trải nghiệm độc đáo, nhất quán và đẳng cấp.
            </p>
            <div className="flex gap-2 items-center flex-wrap">
              {[
                {
                  label: "Facebook",
                  image: "/uploads/source/icon/facebook.png",
                  link: "https://www.facebook.com/",
                },

                {
                  label: "Youtube",
                  image: "/uploads/source/icon/youtube.png",
                  link: "https://www.youtube.com/",
                },
                {
                  label: "Instagram",
                  image: "/uploads/source/icon/instagram.png",
                  link: "https://www.instagram.com/",
                },
                {
                  label: "Zalo",
                  image: "/uploads/source/icon/zalo.png",
                  link: "https://zalo.me/pc",
                },
              ].map((el, index) => (
                <Link
                  key={index}
                  href={el.link}
                  className="relative w-7 h-7"
                  target="_blank"
                >
                  <Image
                    src={el.image}
                    alt={el.label}
                    title={el.label}
                    fill
                    sizes="10vw"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="mb-3">
              <p className="text-white relative pb-4 mb-4 text-md font-bold leading-6">
                Thực đơn
              </p>
            </div>
            <ul className="p-0">
              <li className="group">
                <Link
                  href="menu"
                  className="text-white translate-x-0 group-hover:text-theme group-hover:translate-x-2 duration-300 flex items-center gap-1"
                >
                  <FaChevronRight />
                  <span>Sản Phẩm</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="mb-3">
              <p className="text-white relative pb-4 mb-4 text-md font-bold leading-6">
                Thông tin
              </p>
            </div>
            <ul className="p-0">
              {[
                { label: "Về chúng tôi", link: "about-us" },
                {
                  label: "Tầm nhìn & sứ mệnh",
                  link: "about-us",
                },
                { label: "Triết lý kinh doanh", link: "about-us" },
                ,
                { label: "Tuyển dụng", link: "about-us" },
                ,
                { label: "Liên hệ", link: "contact" },
              ].map((el, index) => (
                <li key={index} className="group">
                  {el && (
                    <Link
                      href={el.link}
                      className="text-white translate-x-0 group-hover:text-theme group-hover:translate-x-2 duration-300 flex items-center gap-1"
                    >
                      <FaChevronRight />
                      <span>{el.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="widget_email col-span-12 md:col-span-4">
            <div className="mb-3">
              <p className="text-white relative pb-4 mb-4 text-md font-bold leading-6">
                Đăng ký theo dõi
              </p>
            </div>
            <div className="text-white mt-3 mx-auto mb-8">
              Đăng ký để nhận thông báo về việc ra mắt sản phẩm, ưu đãi đặc biệt
              và tin tức về GỜ COFFEE.
            </div>
            <form method="post">
              <div className="overflow-hidden border-b border-solid border-white h-[50px] flex">
                <div className="w-[calc(100%_-_70px)] mb-0">
                  <input
                    name="email"
                    type="text"
                    placeholder="Nhập email..."
                    className="border-0 h-[50px] leading-[50px] rounded-3 mb-0 w-full outline-none text-white text-base bg-transparent shadow-none"
                    required
                  />
                </div>
                <div className="w-[70px]">
                  <button
                    type="submit"
                    className="w-full h-[50px] leading-[50px] px-5 py-0 rounded-3 text-white flex justify-center items-center"
                  >
                    <FaPaperPlane />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Copyright />
    </footer>
  );
};

export default Footer;
