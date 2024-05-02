"use client";
import { useUserStore } from "@/store/store";
import { redirect } from "next/navigation";
import { useEffect } from "react";

type Prop = {
  children: JSX.Element;
};

export default function CheckAdminLogin({ children }: Prop) {
  const { user } = useUserStore();

  useEffect(() => {
    console.log("test out")
    if (user && !user.isAdmin) {
      console.log("test in")
      redirect("/");
    }
  }, [user]);

  return <>{children}</>;
}
