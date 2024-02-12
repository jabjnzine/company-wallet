"use client";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { Liff } from "@line/liff";
import { useState, useEffect } from "react";
import Head from "next/head";
import DesktopDevice from "@/components/DesktopDevice";
import { isMobile } from "react-device-detect";
function MyApp({ Component, pageProps }: AppProps) {
  const [liffObject, setLiffObject] = useState<Liff | null>(null);
  const [liffError, setLiffError] = useState<string | null>(null);
  useEffect(() => {
    import("@line/liff")
      .then((liff) => liff.default)
      .then((liff) => {
        console.log("LIFF init...");
        liff
          .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! })
          .then(async () => {
            console.log("LIFF init succeeded.");
            await setLiffObject(liff);
          })
          .catch((error: Error) => {
            console.log("LIFF init failed.");
            setLiffError(error.toString());
          });
      });
  }, []);

  pageProps.liff = liffObject;
  pageProps.liffError = liffError;
  if (!isMobile) {
    return <DesktopDevice></DesktopDevice>;
  }
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
