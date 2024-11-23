import Container  from "./components/container";
import Title, {TitleSize} from "./components/title";
import { Bebas_Neue } from "next/font/google";
import { Content } from "./lib/content";
import {getContent, parseFromMedias} from "./lib/contentful";
import Banner from "@/app/components/banner";
import Card from "@/app/components/card";
import Grid from "@/app/components/grid";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default async function Home() {

  Content.media = parseFromMedias(
    await getContent("media")
  );

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
                <Card key={media.id} contentId={media.id} thumb={media.thumb} title={media.title}></Card>
              );
            })
          }
        </Grid>
      </Container>
    </>
  );
}
