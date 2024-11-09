
export default function Background() {
  return (
    <div>
      <video autoPlay muted loop className="fixed top-0 z-[-1] w-full hidden sm:block">
        <source src="/background.mp4" type="video/mp4"/>
      </video>
      <video autoPlay muted loop className="fixed top-0 z-[-1] w-full sm:hidden">
        <source src="/background-mobile.mp4" type="video/mp4"/>
      </video>
    </div>
  )
}