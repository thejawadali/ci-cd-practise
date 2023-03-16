import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Counter from "../components/Counter";

const Home: NextPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Counter></Counter>
    </div>
  );
};

export default Home;
