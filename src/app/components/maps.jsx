
export default function Maps({embed}) {
  return (
    <iframe
      className="w-full h-64 border-stone-200 border-2 rounded-2xl sm:h-[48vh] lg:h-full"
      referrerPolicy="no-referrer-when-downgrade"
      src={embed}
      allowFullScreen>
    </iframe>
  )
}