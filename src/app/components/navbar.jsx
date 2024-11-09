'use client'
import Image from "next/image";
import { LuMenu } from "react-icons/lu";
import Text from "./text";
import { useState } from "react";
import Menu from "./menu";

export default function Navbar({content}) {

  const [menuEnabled, setMenuEnabled] = useState(false)

  return (
    <header className="bg-stone-950 text-zinc-50 flex items-center fixed top-0 z-20 w-full px-3 py-6 shadow-lg sm:justify-between sm:py-5 sm:px-8 lg:py-9 lg:px-10 lg:min-h-28">
      <LuMenu size={24} className="ml-2 mr-5 sm:hidden" onClick={() => {setMenuEnabled(true)}}></LuMenu>
      <Image src={"/logo.svg"} width={0} height={0} className="w-32 sm:w-40 lg:w-48" alt="brand"></Image>

      <Menu enable={setMenuEnabled} isEnabled={menuEnabled} contacts={content.contacts}></Menu>
    </header>
  )
}