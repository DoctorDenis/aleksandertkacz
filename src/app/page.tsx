"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import "./page.scss";
import Link from "next/link";
import { useState } from "react";

const audio = new Audio("audio.mp3");

export default function Home() {
  const [animated, setAnimated] = useState(false);

  function clickHandler() {
    setAnimated(true);
    setTimeout(() => audio.play(), 250);
  }

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
          onClick={clickHandler}
        ></Image>
      </div>
    </>
  );
}
