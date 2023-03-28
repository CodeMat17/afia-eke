import LoadingPage from "@/components/LoadingPage";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "next/router";
import { useState } from "react";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    console.log("route is starting");
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    console.log("route is complete");
    setLoading(false);
  });

  return (
    <ChakraProvider>
      <Layout>
        {loading && <LoadingPage />}
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
