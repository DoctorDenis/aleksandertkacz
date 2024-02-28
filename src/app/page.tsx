"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import "./page.scss";
import Link from "next/link";
import OfertaCard from "@/components/OfertaCard/OfertaCard";
import { useState } from "react";

export default function Home() {
  const [animated, setAnimated] = useState(false);
  return (
    <main className="main">
      {/* <div className={`image_wrapper ${animated ? "animated" : ""}`}>
        <Image
          fill
          src={"/Magic-Hat.png"}
          alt="Magic Hat"
          onClick={() => setAnimated(true)}
        ></Image>
      </div> */}
      <nav className={"nav"}>
        <div className="nav__item card">
          <div className={`inner`}>
            <Link href={"/about-us"} className="front">
              O nas
            </Link>
            <div className="back"></div>
          </div>
        </div>

        <div className="nav__item card">
          <div className={`inner`}>
            <OfertaCard></OfertaCard>
            <div className="back"></div>
          </div>
        </div>

        <div className="nav__item card">
          <div className={`inner`}>
            <Link href={"/contacts"} className={"front"}>
              Kontakt
            </Link>
            <div className="back"></div>
          </div>
        </div>

        <div className="nav__item card">
          <div className={`inner`}>
            <Link href={"/commercial-events"} className={"front"}>
              Galeria
            </Link>
            <div className="back"></div>
          </div>
        </div>
      </nav>
    </main>
  );
}
