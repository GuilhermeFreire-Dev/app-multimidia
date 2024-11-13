export async function getContent(contentId = "") {
  try {
    return await requestContentful(`${process.env.CONTENTFUL_URL}/spaces/${process.env.CONTENTFUL_SPACE}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_TOKEN}&sys.contentType.sys.id=${contentId}`);
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

function parseSections(response) {
  let sections = [];
  sections = response.items.map(item => {
    return {
      id: item.sys.id,
      title: item.fields.title,
      text: item.fields.text,
      image: {
        id: item.fields.image.sys.id
      }
    };
  });

  sections.map(section => {
    const asset = response.includes.Asset.find(asset => {
      return asset.sys.id === section.image.id;
    });
    section.image.title = asset.fields.title;
    section.image.url = `https:${asset.fields.file.url}`;
    return section;
  });

  return sections;
}

function parseContacts(response) {
  return response.items.map(item => {
    return item.fields;
  });
}