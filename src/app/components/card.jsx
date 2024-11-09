"use client";
import {LuClapperboard} from "react-icons/lu";

export default function Card({contentId, thumb}) {

  function redirect() {
    if (contentId) {
      window.location.href = `/watch?id=${contentId}`;
    }
  }

  function getThumb() {
    if (thumb) return ( <div>imagem</div> );
    return (
      <LuClapperboard size={48} className={"text-neutral-700"}></LuClapperboard>
    );
  }

  return (
    <div onClick={redirect}
      className="bg-neutral-800 rounded-xl w-44 h-64 flex flex-col items-center justify-center cursor-pointer">
      {getThumb()}
    </div>
  );
}