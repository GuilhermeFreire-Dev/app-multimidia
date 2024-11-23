"use client";
import Image from "next/image";
import {LuUser2} from "react-icons/lu";

export default function Navbar() {

  return (
    <header className="flex items-center w-full m-auto px-3 py-6 md:w-4/5 sm:justify-between sm:py-5 sm:px-8 lg:py-5 lg:px-16 lg:min-h-28">
      <a href={"/"}>
        <Image src={"/logo.svg"} width={120} height={0} alt="brand"></Image>
      </a>
      <nav className="hidden text-lg font-medium md:grid md:grid-cols-3 md:gap-10">
        <a href="#">Filmes</a>
        <a href="#">Séries</a>
        <span>
          <LuUser2 size={32}></LuUser2>
        </span>
      </nav>
    </header>
  );
}