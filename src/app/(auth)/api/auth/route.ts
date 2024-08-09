export async function POST(req: Request) {
  const body = await req.json();
  const accessToken = body.accessToken as string;
  const refreshToken = body.refreshToken as string;

  if (!accessToken) {
    return Response.json(
      { message: "Không nhận được access token" },
      {
        status: 400,
      }
    );
  }
  // const expiresDate = new Date(expiresAt).toUTCString();
  return Response.json(body, {
    status: 200,
    headers: {
      "Set-Cookie": `accessToken=${accessToken}; refreshToken=${refreshToken}; Path=/; HttpOnly; SameSite=Lax; Secure`,
    },
  });
}
