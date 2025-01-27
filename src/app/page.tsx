"use client";
import Image from "next/image";
import Navbar from "./components/NavBar";
import Scene from "./components/Scene";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between sm:p-5 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Scene />
      <footer className="flex items-center justify-center text-gray-700">
        <a
          className="flex items-center hover:underline hover:underline-offset-4"
          href="https://abbassi-mouhamed.web.app"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={24}
            height={24}
            className="mr-2"
          />
          Created By Abbassi Mouhamed
        </a>
      </footer>
    </div>
  );
}
