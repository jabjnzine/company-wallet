"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function SplashScreen() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoggin, setIsLoggin] = useState(false);
  const [profile, setProfile] = useState<any>({});
  const { push } = useRouter();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const liff = (await import("@line/liff")).default;
        await liff.ready;
        const userProfile = await liff.getProfile();
        setProfile(userProfile);
        setIsLoggin(true);
        push("/Company");
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [profile.userId, push]);
  return (
    <div>
      <div className="bg-white flex flex-col justify-center  items-center  w-full h-dvh">
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            id="logo"
            width={200}
            height={200}
          />{" "}
        </div>
        <div>
          {isMounted && !isLoggin ? (
            <Link href="https://liff.line.me/2002826542-rmqzgK14">
              <Button
                variant={"outline"}
                className="border-[#2F4B67] w-[327px]  h-[48px] rounded-[8px] p-[12px]"
              >
                <Image alt="line" src="/favicon.ico" width={20} height={20} className="mr-2"/>
                เข้าสู่ระบบด้วยบัญชี Line
              </Button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
