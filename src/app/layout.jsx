import { Montserrat } from "next/font/google"; //tem import de fonte nativo
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });  //aqui seta como uma variavel e o tipo de fonte (normal- latin, vietnamisa, Cirílico, etc)

export const metadata = {
  title: "Desenvolvimento Web", //titulo da aplicação
  description: "Demonstração de funcionalidade", //desc de nao sei onde 
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br"> {/* Seta a linguagem aqui já */}
    <head>
      <link rel="icon" href="./PageIcon.svg" />
    </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
