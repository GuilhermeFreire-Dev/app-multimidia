import Image from "next/image";
import Container  from "./components/container";
import Title, {TitleSize} from "./components/title";
import Text from "./components/text";
import Carousel from "./components/carousel";
import Maps from "./components/maps";
import { Bebas_Neue } from "next/font/google";
import { Content } from "./lib/content";
import {getCarousels, getContent, getSections, parseFromMedias} from "./lib/contentful";
import Background from "./components/background";
import Banner from "@/app/components/banner";
import Card from "@/app/components/card";
import Grid from "@/app/components/grid";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default async function Home() {

  Content.media = parseFromMedias(
    await getContent("media")
  );

  console.log(Content.media);

  return (
    <>
      <Container>
        <Banner></Banner>
      </Container>
      <Title title={"Conteúdos disponíveis"} size={TitleSize.h3}></Title>
      <Container>
        <Grid cols={4}>
          {
            Content.media.map((media) => {
              return (
                <Card key={media.id} contentId={media.id} thumb={media.thumb}></Card>
              );
            })
          }
        </Grid>
      </Container>
    </>
  );
}
