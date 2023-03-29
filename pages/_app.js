import LoadingPage from "@/components/LoadingPage";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { useState } from "react";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
    setLoading(false);
  });

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
          integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
      </Head>
      <ChakraProvider>
        <Layout>
          {loading && <LoadingPage />}
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
