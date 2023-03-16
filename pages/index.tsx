import Head from "next/head";
import Image from "next/image";

import Counter from "../components/Counter";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-screen flex flex-col items-center justify-center">
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div className="mt-10 flex justify-center items-center">
          <Counter></Counter>
        </div>
      </main>
    </div>
  );
}
