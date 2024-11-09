import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import FloatButton from './components/float-button'
import { Content } from './lib/content'
import { getContacts } from './lib/contentful'

export const metadata = {
  title: 'Evolução Bike',
  description: 'Loja de bicicletas em Goiânia',
  applicationName: 'Evolução Bike',
  keywords: ['evolucao bike', 'loja de bicicletas', 'loja de bicicletas em goiânia', 'evolucao'],
  authors: [{ name: 'Evolução Bike LTDA' }, { name: 'Guilherme Freire', url: 'guilherme-freire.vercel.app' }],
  creator: 'Guilherme Freire',
  publisher: 'Vercel',
  category: 'bicicletas',
  openGraph: {
    title: 'Evolução Bike',
    description: 'Loja de bicicletas em Goiânia',
    url: 'https://www.evolucaobike.com.br/',
    siteName: 'Evolução Bike',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://www.evolucaobike.com.br/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Flpcjeaxh05gh%2F6YOnMWOWb0rvQ3XDBZcOiH%2Fc4569714d5576e478b36c2aa095e927c%2Fstore-front.jpg&w=640&q=75',
        width: 640,
        height: 640
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evolução Bike',
    description: 'Loja de bicicletas em Goiânia',
    creator: 'Evolução Bike',
    images: ['https://www.evolucaobike.com.br/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Flpcjeaxh05gh%2F6YOnMWOWb0rvQ3XDBZcOiH%2Fc4569714d5576e478b36c2aa095e927c%2Fstore-front.jpg&w=640&q=75'],
  },
}

export default async function RootLayout({ children }) {

  // Content.contacts = await getContacts()
  // Content.contacts.map(contact => {
  //   contact.icon = getIcon(contact.type)
  //   return contact
  // })
  //
  // function getIcon(iconType = '') {
  //   return Content.icons.find(icon => {
  //     return icon.type === iconType
  //   }).icon
  // }

  return (
    <html lang="pt-br">
      <body className="overflow-y-scroll">
          <Navbar content={Content}></Navbar>
          <main className="mt-16 bg-cover bg-top sm:mt-20 lg:mt-28">
            {children}
          </main>
          <Footer content={Content}></Footer>
      </body>
    </html>
  )
}
