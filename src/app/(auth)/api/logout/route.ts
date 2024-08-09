import { HttpError } from "@/utils/http";
import authApiRequest from "@/utils/requests";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");
  console.log("accessToken", accessToken);
  if (!accessToken) {
    return Response.json(
      { message: "Không nhận được session token" },
      {
        status: 400,
      }
    );
  }
  try {
    const result = await authApiRequest.callLogoutFromNextJsServer(
      accessToken.value
    );

    return Response.json(result.payload, {
      status: 200,
      headers: {
        // Remove the accessToken cookie
        "Set-Cookie": `accessToken=; Path=/; HttpOnly; Expires=Thu, 01 Jan 1970 00:00:00 GMT`,
      },
    });
  } catch (error) {
    console.log(error);
    if (error instanceof HttpError) {
      return Response.json(error.payload, {
        status: error.status,
      });
    }
    return Response.json(
      { message: "Lỗi không xác định" },
      {
        status: 400,
      }
    );
  }
}
