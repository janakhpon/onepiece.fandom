import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "@/styles/global.css";
import * as ga from "@/lib/gtag";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { events } = router;

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      ga.pageview(url);
    };
    events.on("routeChangeComplete", handleRouteChange);
    return () => {
      events.off("routeChangeComplete", handleRouteChange);
    };
  }, [events]);

  return <Component {...pageProps} />;
}
