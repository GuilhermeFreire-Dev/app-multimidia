
export async function getCarousels() {
  try {
    return parseCarousels(
      await requestContentful(`${process.env.CONTENTFUL_URL}/spaces/${process.env.CONTENTFUL_SPACE}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_TOKEN}&sys.contentType.sys.id=carousel`)
    )
  } catch (error) {
    return []
  }
}

export async function getSections() {
  try {
    return parseSections(
      await requestContentful(`${process.env.CONTENTFUL_URL}/spaces/${process.env.CONTENTFUL_SPACE}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_TOKEN}&sys.contentType.sys.id=section`)
    )
  } catch (error) {
    return []
  }
}

export async function getContacts() {
  try {
    return parseContacts(
      await requestContentful(`${process.env.CONTENTFUL_URL}/spaces/${process.env.CONTENTFUL_SPACE}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_TOKEN}&sys.contentType.sys.id=contacts`)
    )
  } catch (error) {
    return []
  }
}

async function requestContentful(url='') {
  const res = await fetch(url, { 
    next: { revalidate: 1800 }
  })
  if (!res.ok) {
    throw new Error('Error on request content from Contentful')
  }
  return await res.json()
}

function parseCarousels(response) {
  let carousels = []
  carousels = response.items.map(item => {
    const images = item.fields.images.map(image => {
      return {
        id: image.sys.id
      }
    })
    return {
      id: item.sys.id,
      title: item.fields.title,
      images: images
    }
  })
  
  carousels.map(carousel => {
    carousel.images.map(image => {
      const asset = response.includes.Asset.find(asset => {
        return asset.sys.id === image.id
      })
      image.title = asset.fields.title
      image.url = `https:${asset.fields.file.url}`
      return image
    })
    return carousel
  })

  return carousels
}

function parseSections(response) {
  let sections = []
  sections = response.items.map(item => {
    return {
      id: item.sys.id,
      title: item.fields.title,
      text: item.fields.text,
      image: {
        id: item.fields.image.sys.id
      }
    }
  })
  
  sections.map(section => {
    const asset = response.includes.Asset.find(asset => {
      return asset.sys.id === section.image.id
    })
    section.image.title = asset.fields.title
    section.image.url = `https:${asset.fields.file.url}`
    return section
  })

  return sections
}

function parseContacts(response) {
  return response.items.map(item => {
    return item.fields
  })
}