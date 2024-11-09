import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FloatButton from "./components/float-button";
import { Content } from "./lib/content";
import { getContacts } from "./lib/contentful";

export const metadata = {
  title: "Multflix",
  description: "Loja de bicicletas em Goiânia",
  creator: "Guilherme Freire",
  publisher: "Vercel",
};

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
      <body className="bg-neutral-950 text-white">
          <Navbar content={Content}></Navbar>
          <main className="">
            {children}
          </main>
          <Footer content={Content}></Footer>
      </body>
    </html>
  );
}
