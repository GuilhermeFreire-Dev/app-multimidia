import Container from "@/app/components/container";
import {ContentTypeEnum, getContent, parseFromMedia} from "@/app/lib/contentful";
import {parseDate} from "@/app/lib/utils";
import Player from "@/app/watch/components/Player";

export default async function Watch({ searchParams }) {

  const media = await parseFromMedia(
    await getContent("", ContentTypeEnum.ENTRIES, true, searchParams.id)
  );

  return (
    <>
      <Player url={media.content.url}></Player>
      <Container>
        <h3 className={"text-2xl font-bold"}>{media.title}</h3>
        <small className={""}>{`upload feito em ${parseDate(media.updated_at)}`}</small>
        <hr className={"my-10"}/>
        <article>
          {media.description}
        </article>
      </Container>
    </>
  );
}