export const ContentTypeEnum = {
  ASSETS: "assets",
  ENTRIES: "entries",
};

export async function getContent(
  contentId = "",
  contentType = ContentTypeEnum.ENTRIES,
  getSingle = false,
  objectId = ""
) {
  try {
    let url = `${process.env.CONTENTFUL_URL}/spaces/${process.env.CONTENTFUL_SPACE}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/${contentType}`;
    if ((ContentTypeEnum.ASSETS || getSingle) && objectId !== "") {
      url += `/${objectId}?access_token=${process.env.CONTENTFUL_TOKEN}`;
    } else {
      url += `?access_token=${process.env.CONTENTFUL_TOKEN}&sys.contentType.sys.id=${contentId}`;
    }
    return await requestContentful(url);
  } catch (error) {
    return null;
  }
}

async function requestContentful(url = "") {
  const res = await fetch(url, {
    next: {revalidate: 1800}
  });
  if (!res.ok) {
    throw new Error("Error on request content from Contentful");
  }
  return await res.json();
}

export function parseFromMedias(response) {
  let medias = [];
  medias = response.items.map(item => {
    return {
      id: item.sys.id,
      title: item.fields.title,
      description: item.fields.description,
      thumb: {
        id: item.fields.thumb.sys.id
      },
      content: {
        id: item.fields.content.sys.id
      }
    };
  });

  medias.map(media => {
    const thumb = response.includes.Asset.find(asset => {
      return asset.sys.id === media.thumb.id;
    });

    const content = response.includes.Asset.find(asset => {
      return asset.sys.id === media.content.id;
    });

    media.thumb.title = thumb.fields.title;
    media.thumb.url = `https:${thumb.fields.file.url}`;
    media.content.title = content.fields.title;
    media.content.url = `https:${content.fields.file.url}`;
    return media;
  });

  return medias;
}

export async function parseFromMedia(response) {
  const media = {
    id: response.sys.id,
    title: response.fields.title,
    description: response.fields.description,
    created_at: response.sys.createdAt,
    updated_at: response.sys.updatedAt,
    thumb: {},
    content: {}
  };

  const thumb_id = response.fields.thumb.sys.id;
  const content_id = response.fields.content.sys.id;

  const thumb = await getContent("", ContentTypeEnum.ASSETS, true, thumb_id);

  media.thumb.id = thumb.sys.id;
  media.thumb.title = thumb.fields.title;
  media.thumb.description = thumb.fields.description;
  media.thumb.url = `https:${thumb.fields.file.url}`;

  const content = await getContent("", ContentTypeEnum.ASSETS, true, content_id);

  media.content.id = content.sys.id;
  media.content.title = content.fields.title;
  media.content.description = content.fields.description;
  media.content.url = `https:${content.fields.file.url}`;

  return media;
}