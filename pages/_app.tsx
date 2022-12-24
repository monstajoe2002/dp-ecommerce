import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import AppHeader from "../components/Header/AppHeader";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ padding: "1.5rem" }}>
      <ChakraProvider>
        <Head>
          <title>Mini E-Commerce App for DP</title>
        </Head>
        <AppHeader />
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}
