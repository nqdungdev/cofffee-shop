import { UseFormSetError } from "react-hook-form";
import { EntityError } from "./http";
import toastConfig from "./toastConfig";

export const handleErrorApi = ({
  error,
  setError,
  duration,
}: {
  error: any;
  setError?: UseFormSetError<any>;
  duration?: number;
}) => {
  console.log(error);
  if (error instanceof EntityError && setError) {
    error.payload.errors.forEach((item) => {
      setError(item.field, {
        type: "server",
        message: item.message,
      });
    });
  } else {
    toastConfig({
      message: error?.payload?.message || "Có lỗi xảy ra!",
      type: "error",
    });
  }
};
