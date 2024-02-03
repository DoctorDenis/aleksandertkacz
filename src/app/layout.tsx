import type { Metadata } from "next";
import Navigation from "../components/Navigation/Header";
import { Inter } from "next/font/google";
import "normalize.css";
import "../app/globals.css";
import Header from "../components/Navigation/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aleksander Tkacz - magician, illusionist",
  description:
    "Website of the Aleksander Tkacz, the magician, illusionist. Strona internetowa Aleksandra Tkacza, magika, iluzjonisty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
