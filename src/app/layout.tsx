import type { Metadata } from "next";
import Header from "../components/Navigation/Header";
import { Inter } from "next/font/google";
import "normalize.css";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iluzjonista Aleksander Tkacz",
  description: "Webpage of the Iluzjonista Aleksander Tkacz",
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
