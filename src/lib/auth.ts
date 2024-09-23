import { signIn } from "next-auth/react";

export const LoginServer = async () => {
  await signIn("google", { redirectTo: "/home" });
};