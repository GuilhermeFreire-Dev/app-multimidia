import Text from "./components/text";

export default function NotFound() {
  return (
    <div className="h-[30em] bg-stone-900 flex flex-col justify-center items-center text-white">
      <h1 className={"text-4xl font-bold my-5"}>Página não encontrada</h1>
      <a href="/">
        <Text text={"voltar para página inicial"} className={"rounded-xl p-3 hover:bg-stone-500"}></Text>
      </a>
    </div>
  );
}