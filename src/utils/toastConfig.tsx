import { Bounce, Flip, Slide, toast, Zoom } from "react-toastify";

interface Toast {
  message: string;
  position?:
    | "top-left"
    | "top-right"
    | "top-center"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center";
  type: "info" | "success" | "warning" | "error";
  theme?: "light" | "dark" | "colored";
  autoClose?: number;
  transition?: "bounce" | "slide" | "zoom" | "flip";
}

const toastConfig = ({
  message,
  position = "bottom-right",
  type,
  theme = "dark",
  autoClose = 3000,
  transition = "bounce",
}: Toast) => {
  toast[type](message, {
    position: position,
    autoClose: autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme,
    transition:
      transition === "bounce"
        ? Bounce
        : transition === "slide"
        ? Slide
        : transition === "zoom"
        ? Zoom
        : Flip,
  });
};

export default toastConfig;
