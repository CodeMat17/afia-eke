import AfiaEke from "@/components/AfiaEke";
import Hero from "@/components/Hero";
import { supabase } from "@/lib/supabaseClient";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home({products}) {
  return (
    <>
      <Head>
        <title>Afia-EKE</title>
        <meta
          name='description'
          content='Afia-EKE is an online shopping mull.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={inter.className}>
        <Hero />
        <AfiaEke products={products} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (!products) {
    return {
      props: {},
    };
  }
  return {
    props: {
      products,
    },
  };
}
