import Image from 'next/image'
import Container  from './components/container'
import Title from './components/title'
import Text from './components/text'
import Carousel from './components/carousel'
import Maps from './components/maps'
import { Bebas_Neue } from 'next/font/google'
import { Content } from './lib/content'
import { getCarousels, getSections } from './lib/contentful'
import Background from './components/background'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export default async function Home() {

  // Content.carousels = await getCarousels()
  // Content.sections = await getSections()

  return (
    <div>

    </div>
  )
}
