import { cookies } from "next/headers";

export async function setCookie(data: string) {
  const expires = new Date(Date.now() + 60 * 60 * 1000);

 (await cookies()).set("session", data, {
    expires,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict"
  });
}

export async function logoutSession() {
  (await cookies()).set("session", "", {
    expires: new Date(0),
  });
}

export async function getSession() {
    const session = (await cookies()).get("session")?.value;
    if (!session) return null;
    return session;
  }
