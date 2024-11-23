import "./globals.css";
import Navbar from "./components/navbar";

export const metadata = {
  title: "Multflix",
  description: "Loja de bicicletas em Goiânia",
  creator: "Guilherme Freire",
  publisher: "Vercel",
};

export default async function RootLayout({ children }) {

  return (
    <html lang="pt-br">
      <body className="bg-neutral-950 text-white">
          <Navbar></Navbar>
          <main className="">
            {children}
          </main>
      </body>
    </html>
  );
}
