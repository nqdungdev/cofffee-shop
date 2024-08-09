"use client";

import Button from "@/components/common/button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toastConfig from "@/utils/toastConfig";
import { RegisterFormType, registerSchema } from "@/schema/auth.schema";
import authApiRequest from "@/utils/requests";
import { handleErrorApi } from "@/utils/errors";
import { useState } from "react";
type Props = {};

const Register = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormType> = async (values) => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await authApiRequest.register(values).then((res) => {
        toastConfig({
          message: res.payload.message || "Đăng ký thành công",
          type: "success",
          autoClose: 3000,
        });
        setTimeout(() => router.push("/login"), 3000);
      });

      console.log(res);
    } catch (error) {
      handleErrorApi({
        error,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-5 w-[300px]"
    >
      {[
        { id: "username", label: "Tài khoản", type: "text" },
        { id: "email", label: "Email", type: "email" },
        { id: "password", label: "Mật khẩu", type: "password" },
        {
          id: "confirmPassword",
          label: "Nhập lại Mật khẩu",
          type: "password",
        },
      ].map((item) => (
        <label
          key={item.id}
          htmlFor={item.id}
          className="relative w-full after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-theme after:block after:z-10  hover:after:w-full focus-within:after:w-full after:transition-all after:duration-300"
        >
          {errors[item.id as keyof RegisterFormType] && (
            <div className="text-red ml-2 mt-2 text-xs">
              {errors[item.id as keyof RegisterFormType]?.message}
            </div>
          )}
          <input
            required
            type={item.type}
            id={item.id}
            placeholder={item.label}
            className="relative text-black text-sm border-b border-solid border-[#3f4a50] shadow-none w-full h-11 font-semibold bg-transparent focus:outline-none pl-6 placeholder-black"
            {...register(item.id as keyof RegisterFormType)}
          />
        </label>
      ))}
      <div className="w-full flex justify-end">
        <Button
          className="bg-theme border-theme text-white hover:bg-white hover:text-theme"
          type="submit"
        >
          Đăng ký
        </Button>
      </div>

      <p className="text-xs text-black font-semibold w-full text-start py-5">
        Đã có tài khoản?
        <Link
          href="/login"
          className="uppercase text-theme text-sm font-semibold mx-2 hover:text-themeLight transition-all duration-300"
        >
          đăng nhập
        </Link>
        ngay!
      </p>
    </form>
  );
};

export default Register;
