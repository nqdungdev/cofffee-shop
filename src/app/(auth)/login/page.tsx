"use client";
import Button from "@/components/common/button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import authApiRequest from "@/utils/requests";
import { handleErrorApi } from "@/utils/errors";
import { loginSchema, LoginFormType } from "@/schema/auth.schema";
import toastConfig from "@/utils/toastConfig";

type Props = {};

const Login = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormType> = async (values) => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await authApiRequest.login(values);

      await authApiRequest
        .auth({
          accessToken: res.payload.token,
          refreshToken: res.payload.refreshToken,
        })
        .then(() => {
          toastConfig({
            message: "Đăng nhập thành công",
            type: "success",
            autoClose: 3000,
          });
          setTimeout(() => {
            router.push("/");
            router.refresh();
          }, 3000);
        });
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
        { id: "email", label: "Email", type: "email" },
        { id: "password", label: "Mật khẩu", type: "password" },
      ].map((item) => (
        <label
          key={item.id}
          htmlFor={item.id}
          className="relative w-full after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-theme after:block after:z-10  hover:after:w-full focus-within:after:w-full after:transition-all after:duration-300"
        >
          {errors[item.id as keyof LoginFormType] && (
            <div className="text-red ml-2 mt-2 text-xs">
              {errors[item.id as keyof LoginFormType]?.message}
            </div>
          )}
          <input
            required
            type={item.type}
            id={item.id}
            placeholder={item.label}
            className="relative text-black text-sm border-b border-solid border-[#3f4a50] shadow-none w-full h-11 font-semibold bg-transparent focus:outline-none pl-6 placeholder-black"
            {...register(item.id as keyof LoginFormType)}
          />
        </label>
      ))}

      <div className="w-full flex justify-end">
        <Link
          href="/forgot-password"
          className="text-theme text-sm font-semibold ml-2 hover:text-themeLight transition-all duration-300"
        >
          Quên mật khẩu?
        </Link>
      </div>

      <div className="w-full flex justify-end">
        <Button
          className="bg-theme border-theme text-white hover:bg-white hover:text-theme"
          type="submit"
        >
          Đăng nhập!
        </Button>
      </div>

      <p className="text-sm text-black font-semibold w-full text-start py-5">
        Chưa có tài khoản?
        <Link
          href="/register"
          className="uppercase text-theme text-sm font-semibold ml-2 hover:text-themeLight transition-all duration-300"
        >
          đăng ký
        </Link>
      </p>
    </form>
  );
};

export default Login;
