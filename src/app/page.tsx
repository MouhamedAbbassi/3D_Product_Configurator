"use client";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Scene from "./components/Scene";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between sm:p-5 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Scene />
      <Footer/>
    </div>
  );
}
