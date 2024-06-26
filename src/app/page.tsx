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
    <>
      <nav className={`nav ${animated ? "animated" : ""}`}>
        <div className={`nav__item card ${animated ? "animated" : ""}`}>
          <div className={`inner`}>
            <Link href={"/about-us"} className="front">
              O nas
            </Link>
            <div className="back"></div>
          </div>
        </div>

        <div
          className={`nav__item card ${animated ? "animated" : ""}`}
          id="oferta"
          onClick={(event) => {
            console.log(event.target);
          }}
        >
          <div className={`inner`}>
            <Link href={"/offer"} className="front">
              Oferta
            </Link>
            <div className="back"></div>
          </div>
        </div>

        <div className={`nav__item card ${animated ? "animated" : ""}`}>
          <div className={`inner`}>
            <Link href={"/contacts"} className={"front"}>
              Kontakt
            </Link>
            <div className="back"></div>
          </div>
        </div>

        <div className={`nav__item card ${animated ? "animated" : ""}`}>
          <div className={`inner`}>
            <Link href={"/galery"} className={"front"}>
              Galeria
            </Link>
            <div className="back"></div>
          </div>
        </div>
      </nav>
      <div className={`image_wrapper ${animated ? "animated" : ""}`}>
        <Image
          fill
          priority
          src={"/Magic-Hat.png"}
          alt="Magic Hat"
          onClick={() => setAnimated(true)}
        ></Image>
        {/* <p className="gaslo">Dotknij!</p> */}
      </div>
    </>
  );
}
