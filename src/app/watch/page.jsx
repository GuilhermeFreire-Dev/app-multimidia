"use client";
import Container from "@/app/components/container";
import Player from "@/app/watch/components/Player";
import {useSearchParams} from "next/navigation";

export default function Watch() {

  const searchParms = useSearchParams();
  const search = searchParms.get("id");

  console.log("search", search);

  return (
    <>
      <Player></Player>
      <Container>
        <h3 className={"text-2xl font-bold"}>Filme Exemplo</h3>
        <small className={""}>upload feito em 01/01/2025</small>
        <hr className={"my-10"}/>
        <article>
          Nobis volutpat dolores hendrerit elitr kasd dolore sanctus no sadipscing labore erat ea et nonumy erat.
          At justo facilisis. Dolor elitr dignissim dolores dolores gubergren lorem kasd labore tincidunt lorem et
          gubergren nonummy diam et ipsum voluptua. Nonumy consetetur amet diam erat ea tation takimata odio hendrerit
          hendrerit praesent ipsum. Consetetur cum clita eum. At amet diam enim sed eirmod no. Aliquyam elitr eum.
          Elitr dolores eros diam consequat ipsum.
        </article>
      </Container>
    </>
  );
}