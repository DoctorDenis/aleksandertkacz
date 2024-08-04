"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import "./page.scss";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { DispatchContext } from "./layout";

let audio: HTMLAudioElement;

export default function Home() {
  const [animated, setAnimated] = useState(false);
  const audioRef = useRef(audio);
  const setHidden = useContext(DispatchContext);

  useEffect(() => {
    audioRef.current = new Audio("audio.mp3");
  }, []);

  function clickHandler() {
    setAnimated(true);
    setTimeout(() => audioRef.current.play(), 250);
    audioRef.current.onended = () => {
      setHidden("hide");
    };
  }

  return (
    <>
      <nav className={`nav ${animated ? "animated" : ""}`}>
        <Link
          href={"/about-us"}
          className={`nav__item ${animated ? "animated" : ""}`}
        >
          O nas
        </Link>

        <Link
          href={"/offer"}
          className={`nav__item ${animated ? "animated" : ""}`}
          id="oferta"
        >
          Oferta
        </Link>

        <Link
          href={"/contacts"}
          className={`nav__item ${animated ? "animated" : ""}`}
        >
          Kontakt
        </Link>

        <Link
          href={"/galery"}
          className={`nav__item ${animated ? "animated" : ""}`}
        >
          Galeria
        </Link>
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
