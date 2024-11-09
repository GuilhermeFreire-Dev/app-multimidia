
export default function Container({child}) {
  return (
    <section className="m-auto py-5 w-5/6 sm:w-2/3 sm:py-10">
      { child }
    </section>
  )
}