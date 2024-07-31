"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import "./page.scss";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

let audio: HTMLAudioElement;

export default function Home() {
  const [animated, setAnimated] = useState(false);
  const audioRef = useRef(audio);

  useEffect(() => {
    audioRef.current = new Audio("audio.mp3");
  }, []);

  function clickHandler() {
    setAnimated(true);
    setTimeout(() => audioRef.current.play(), 250);
  }

  return (
    <>
      <nav className={`nav ${animated ? "animated" : ""}`}>
        {/* <div className={`inner`}> */}
        <Link
          href={"/about-us"}
          className={`nav__item ${animated ? "animated" : ""}`}
        >
          O nas
        </Link>
        {/* </div> */}

        {/* <div className={`inner`}> */}
        <Link
          href={"/offer"}
          className={`nav__item ${animated ? "animated" : ""}`}
          id="oferta"
        >
          Oferta
        </Link>
        {/* </div> */}

        {/* <div className={`inner`}> */}
        <Link
          href={"/contacts"}
          className={`nav__item ${animated ? "animated" : ""}`}
        >
          Kontakt
        </Link>
        {/* </div> */}

        {/* <div className={`inner`}> */}
        <Link
          href={"/galery"}
          className={`nav__item ${animated ? "animated" : ""}`}
        >
          Galeria
        </Link>
        {/* </div> */}
        <div className="space"></div>
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
