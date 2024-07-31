// "use client";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "../components/Navigation/Header";
import { Inter } from "next/font/google";
import "normalize.css";
import "../app/globals.css";
import "./page.scss";

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
        <main className="main">{children}</main>
        <Link href="/contacts">
          <div id="reservation" className="reserve">
            <p>Zarezerwuj termin, zanim zniknie!</p>
          </div>
        </Link>
      </body>
    </html>
  );
}
