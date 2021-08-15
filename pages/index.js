import { useState } from "react";
import Speedo from "../components/speedo";
import Head from "next/head";

export default function Home() {
  const [triggerSpeedTest, setTriggerSpeedTest] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Speed Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Home Internet Speedtest</h1>

        <p className="mt-3 text-2xl">Test your speed at home from remote.</p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Speedo></Speedo>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by speedtest-cli package.
        </a>
      </footer>
    </div>
  );
}
