
export default function Container({children}) {
  return (
    <section className="m-auto w-4/5 py-5 sm:w-2/3 sm:py-10">
      { children }
    </section>
  )
}