"use client";

import Button from "@/components/common/button/Button";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
type Props = {};

export interface FormInputs {
  name: string;
  email: string;
  phone: string;
  content: string;
}

const Contact = (props: Props) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Tên không được để trống"),
    email: yup
      .string()
      .required("Email không được để trống")
      .email("Email không đúng định dạng"),
    phone: yup
      .string()
      .required("Số điện thoại không được để trống")
      .min(10, "Số điện thoại không đúng"),
    content: yup.string().required("Ghi chú không được để trống"),
  });
  const { register, handleSubmit, watch } = useForm<FormInputs>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      content: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const sendEmail = async (values: FormInputs) => {
    // Get the current date and time in JST format
    const currentDate = new Date();
    const subject = `from ${values.email}`;
    const emailBody = `
      ${currentDate} 
      ==================================================

      ■ Họ tên:
      ${values.name}

      ■ Email:
      ${values.email}

      ■ Số điện thoại:
      ${values.phone}

      ■ Ghi chú:
      ${values.content}
    `;
    const mailtoURL = `mailto:${
      process.env.NEXT_PUBLIC_EMAIL
    }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      emailBody
    )}`;
    window.location.href = mailtoURL;
  };

  const onSuccess = (data: FormInputs) => sendEmail(data);
  const onError = (error: FieldErrors<FormInputs>) => {
    console.log(error);
  };

  return (
    <>
      <div className="grid grid-cols-3 bg-white rounded-md overflow-hidden">
        <div className="col-span-3 md:col-span-1 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.534421103568!2d106.64076052000632!3d10.846897367561075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529976b24ab8b%3A0x7528411e16ed1140!2zxJDhuqBJIEhPw4BORyBQSMOBVA!5e0!3m2!1svi!2sus!4v1663941711016!5m2!1svi!2sus"
            width={600}
            height={450}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0 min-h-[200]"
          />
        </div>
        <div className="col-span-3 md:col-span-2 p-4">
          <h3 className="text-[#304e73] font-bold text-[25px] leading-[25px] relative my-5 pb-2 after:absolute after:left-0 after:top-full after:w-[50px] after:h-[1px] after:bg-themeLight">
            THÔNG TIN LIÊN HỆ
          </h3>

          <div className="py-3">
            <p className="text-base leading-[28px] tracking-[0.3px] text-[5b6880] mb-5">
              <span className="text-[#01358d]">Địa chỉ: </span> TP Hồ Chí Minh
            </p>
            <p className="text-base leading-[28px] tracking-[0.3px] text-[5b6880] mb-5">
              <span className="text-[#01358d]">Điện thoại: </span> 0123 456 789
            </p>
            <p className="text-base leading-[28px] tracking-[0.3px] text-[5b6880] mb-5">
              <span className="text-[#01358d]">E-mail: </span>
              email@gmail.com
            </p>

            <div className="p-0">
              <ul className="mt-8 mb-4 pl-8 flex items-center">
                {[
                  {
                    label: "Facebook",
                    link: "https://www.facebook.com/",
                    icon: <FaFacebookF />,
                  },
                  {
                    label: "Youtube",
                    link: "https://www.youtube.com/",
                    icon: <FaYoutube />,
                  },
                ].map((el, index) => (
                  <li key={index} className="mr-3">
                    <Link
                      className="flex justify-center items-center bg-theme text-white w-10 h-10 rounded-full"
                      href={el.link}
                      target="_blank"
                    >
                      {el.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-[#304e73] font-bold text-[25px] leading-[25px] relative my-5 pb-2 after:absolute after:left-0 after:top-full after:w-[50px] after:h-[1px] after:bg-themeLight">
            <h3>LIÊN HỆ CHÚNG TÔI</h3>
          </div>

          <form
            className="overflow-hidden w-full"
            onSubmit={handleSubmit(onSuccess)}
          >
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-2 md:col-span-1 mb-3 relative">
                <input
                  type="text"
                  className="shadow-none w-full h-[52px] bg-transparent border border-solid border-[#d9dde4] rounded-md p-5 txt-base leading-[1.2] tracking-[0.3px]"
                  id="name"
                  placeholder="Họ tên của bạn"
                  required
                  {...register("name")}
                />
              </div>
              <div className="mb-3 relative col-md-6">
                <input
                  type="email"
                  className="shadow-none w-full h-[52px] bg-transparent border border-solid border-[#d9dde4] rounded-md p-5 txt-base leading-[1.2] tracking-[0.3px]"
                  id="email"
                  placeholder="Email của bạn"
                  required
                  {...register("email")}
                />
              </div>
            </div>

            <div className="mb-3 relative">
              <input
                type="tel"
                className="shadow-none w-full h-[52px] bg-transparent border border-solid border-[#d9dde4] rounded-md p-5 txt-base leading-[1.2] tracking-[0.3px]"
                id="phone"
                placeholder="Điện thoại của bạn"
                required
                {...register("phone")}
              />
            </div>

            <div className="mb-3 relative">
              <textarea
                className="shadow-none w-full h-[52px] bg-transparent border border-solid border-[#d9dde4] rounded-md p-5 txt-base leading-[1.2] tracking-[0.3px]"
                value=""
                id="content"
                placeholder="Ghi chú"
                style={{
                  overflow: "hidden",
                  wordWrap: "break-word",
                  height: 150,
                }}
                {...register("content")}
              />
            </div>

            <div className="mb-3 relative">
              <Button
                type="submit"
                className="bg-blue border-blue text-white hover:bg-white hover:text-blue"
              >
                Gửi
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
