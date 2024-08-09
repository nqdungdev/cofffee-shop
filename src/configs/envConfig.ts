const envConfig = {
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
};

if (!envConfig.NEXT_PUBLIC_API_ENDPOINT) {
  console.error("NEXT_PUBLIC_API_ENDPOINT is not defined or invalid");
  throw new Error("Các giá trị khai báo trong file .env không hợp lệ");
}

export default envConfig;
