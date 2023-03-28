import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Router from "next/router";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
