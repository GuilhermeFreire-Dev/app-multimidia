'use client'
import Image from "next/image";
import {LuMenu, LuUser2} from "react-icons/lu";
import Text from "./text";
import { useState } from "react";
import Menu from "./menu";

export default function Navbar({content}) {

  const [menuEnabled, setMenuEnabled] = useState(false)

  return (
    <header className="flex items-center w-4/5 m-auto px-3 py-6 sm:justify-between sm:py-5 sm:px-8 lg:py-5 lg:px-16 lg:min-h-28">
      <LuMenu size={24} className="ml-2 mr-5 sm:hidden" onClick={() => {setMenuEnabled(true)}}></LuMenu>
      <a href={"/"}>
        <Image src={"/logo.svg"} width={120} height={0} alt="brand"></Image>
      </a>
      <nav className="text-lg font-medium grid grid-cols-3 gap-10">
        <a href="#">Filmes</a>
        <a href="#">Séries</a>
        <span>
          <LuUser2 size={32}></LuUser2>
        </span>
      </nav>
      <Menu enable={setMenuEnabled} isEnabled={menuEnabled} contacts={content.contacts}></Menu>
    </header>
  )
}