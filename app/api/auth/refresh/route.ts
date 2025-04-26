import { refreshTokenSchema } from "@/schemas/login-schema";
import { generateAccessToken, verifyRefreshToken } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { refreshToken } = refreshTokenSchema.parse(body);

    const user = await verifyRefreshToken(refreshToken);
    if (!user) {
      return NextResponse.json(
        { error: "Invalid refresh token" },
        { status: 401 }
      );
    }

    const newAccessToken = generateAccessToken(user);

    const response = NextResponse.json({ accessToken: newAccessToken });

    response.cookies.set("accessToken", newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }
}
