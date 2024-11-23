
export default function Grid({cols=1, children}) {
  return (
    <div className={"grid grid-cols-2 sm:grid-cols-5 gap-4 justify-items-center"}>
      {children}
    </div>
  );
}