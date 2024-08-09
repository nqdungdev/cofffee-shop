import * as yup from "yup";

export type LoginFormType = {
  email: string;
  password: string;
};

export type LoginBodyType = LoginFormType;

export type LoginResType = {
  info: { _id: string; email: string; password: string; verified: boolean };
  message: string;
  refreshToken: string;
  token: string;
};

export type RegisterFormType = {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
};

export type RegisterBodyType = Omit<RegisterFormType, "confirmPassword">;

export type RegisterResType = { message: string };

export const loginSchema: yup.ObjectSchema<LoginFormType> = yup.object().shape({
  email: yup
    .string()
    .required("Email không được để trống")
    .email("Email không đúng định dạng"),
  password: yup
    .string()
    .required("Mật khẩu không được để trống")
    .min(6, "Mật khẩu quá ngắn"),
});

export const registerSchema: yup.ObjectSchema<RegisterFormType> = yup
  .object()
  .shape({
    username: yup.string().required("Username không được để trống"),
    password: yup
      .string()
      .required("Mật khẩu không được để trống")
      .min(6, "Mật khẩu quá ngắn."),
    confirmPassword: yup
      .string()
      .required("Nhập lại mật khẩu không đúng")
      .oneOf([yup.ref("password")], "Nhập lại mật khẩu không đúng"),
    email: yup
      .string()
      .required("Email không được để trống")
      .email("Email không đúng định dạng"),
  });
