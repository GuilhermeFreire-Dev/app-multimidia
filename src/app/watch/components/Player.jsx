
export default function Player() {
  return (
    <div className={"bg-neutral-800 backdrop-blur-md w-full flex flex-row justify-center"}>
      <video width="720" height="480" autoPlay muted controls>
        <source src="https://tekeye.uk/html/images/Joren_Falls_Izu_Jap.mp4" type="video/mp4"/>
      </video>
    </div>
  )
}