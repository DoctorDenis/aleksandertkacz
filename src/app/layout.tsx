// "use client";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import magicBallImage from "../../public/magic-ball.png";

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
  const clickChecker: React.MouseEventHandler<HTMLElement> = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const target = event.target as HTMLElement;
    console.log(event);
  };

  return (
    <html lang="pl">
      <body
        className={inter.className}
        // onClick={clickChecker}
      >
        <Header></Header>
        <main className="main">{children}</main>
        <Link href="/reservation">
          {" "}
          <div id="reservation" className="reserve">
            {/* <Image
            className="magicball"
            src={magicBallImage}
            alt="Magic ball. Reservation of the exhibition"
          ></Image> */}
            <p>Zarezerwuj, dopóki nie zniknęło!</p>
          </div>
        </Link>
      </body>
    </html>
  );
}
