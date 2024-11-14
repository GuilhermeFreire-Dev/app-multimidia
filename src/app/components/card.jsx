"use client";
import {LuClapperboard} from "react-icons/lu";

export default function Card({contentId, thumb}) {

  function redirect() {
    if (contentId) {
      window.location.href = `/watch?id=${contentId}`;
    }
  }

  function getThumb() {
    if (thumb.url) return (
      <div className={"w-full h-full rounded-xl bg-no-repeat bg-center bg-cover"}
           style={{backgroundImage: `url(${thumb.url})`}}>
      </div>
    );
    return (
      <LuClapperboard size={48} className={"text-neutral-700"}></LuClapperboard>
    );
  }

  return (
    <div onClick={redirect} className={"cursor-pointer"}>
      <div
        className="bg-neutral-800 relative rounded-xl w-44 h-64 flex flex-col items-center justify-center">
        {getThumb()}
        <div
          className={"absolute transition ease-in-out delay-100 h-full w-full opacity-0 hover:opacity-100 hover:bg-neutral-950 hover:bg-opacity-60"}>
          <p className={"absolute bottom-32 w-full text-center"}>Assistir</p>
        </div>
      </div>
      <p className={"pt-2"}>{thumb.title}</p>
    </div>
  );
}