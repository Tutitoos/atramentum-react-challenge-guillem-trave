import Head from "next/head";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Atramentum</title>
        <meta name="description" content="Technical test for Atramentum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header />
      <main></main>
    </>
  );
}
