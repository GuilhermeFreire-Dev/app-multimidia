import {LuClapperboard} from "react-icons/lu";

export default function Player({url}) {

  function getPlayer() {
    if (url && url !== "") {
      return (
        <video width="720" height="480" autoPlay muted controls>
          <source src={url} type="video/mp4"/>
        </video>
      );
    }
    return (
      <div>
        <LuClapperboard size={64} className={"m-44 text-neutral-500"}></LuClapperboard>
      </div>
    );
  }

  return (
    <div className={"bg-neutral-800 backdrop-blur-md w-full flex flex-row justify-center"}>
      {getPlayer()}
    </div>
  );
}