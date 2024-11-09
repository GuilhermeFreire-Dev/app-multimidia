import Image from "next/image";
import Title from "./components/title";
import Text from "./components/text";

export default function NotFound() {
  return (
    <div className="h-[30em] bg-stone-900 flex flex-col justify-center items-center text-white">
      <Title title={'404'}></Title>
      <Title title={'Página não encontrada'}></Title>
      <a href="/">
        <Text text={'voltar para página inicial'} className={'rounded-xl p-3 hover:bg-stone-500'}></Text>
      </a>
    </div>
  )
}