export const TitleSize = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  h5: "text-lg",
};

export default function Title({title="", size=TitleSize.h1}) {
  return (
    <div className="m-auto w-4/5 py-2 sm:w-2/3 sm:py-2">
      <h1 className={`font-bold ${size.toString()}`}>Conteúdos disponíveis</h1>
    </div>
  );
}