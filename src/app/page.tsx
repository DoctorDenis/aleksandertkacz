/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import "./page.scss";
import Link from "next/link";
import OfertaCard from "@/components/OfertaCard/OfertaCard";

export default function Home() {
  return (
    <main className="main">
      <div className="image_wrapper">
        {/* <Image
          fill
          src={"/Magic-Hat.png"}
          alt="Magic Hat"
          sizes="(max-width: 320px) 100vw, (max-width: 768px) 50vw, 33vw"
        ></Image> */}
        <nav className={"nav"}>
          <div className={"nav__item"}>
            <Link href={"/about-us"}>O nas</Link>
          </div>
          <div className={"nav__item"}>
            <OfertaCard></OfertaCard>
          </div>
          <div className={"nav__item"}>
            <Link href={"/commercial-events"}>Galeria</Link>
          </div>

          <div className={"nav__item"}>
            <Link href={"/contacts"}>Kontakt</Link>
          </div>
        </nav>
      </div>
      {/* <h1 className={styles.header}>TEATR ILUZJI ALEKSANDRA TKACZA</h1>
      <p className={styles.text}>
        Spektakl ''Tajemnice Iluzji'' jest przygotowany z myślą o dzieciach i
        młodzieży. Forma spektaklu jest bardzo atrakcyjna, dopasowana do poziomu
        percepcji uczniów, pobudza również aktywność intelektualną uczestników
        przedstawienia oraz daje interesujący pogląd na matematykę, fizykę
        poprzez sztukę iluzji. Współudział uczniów w rozwiązywaniu zadań w
        trakcie spektaklu wywiera pozytywny wpływ na tworzenie aktywnych i
        twórczych postaw. Sztuka iluzji dostarcza miłych wrażeń, niezapomnianych
        przeżyć oraz korzystnie wpływa 6 na rozwój wyobraźni i logicznego
        myślenia.
        <br />
        Spektakl ''Tajemnice Iluzji'' jest przygotowany z myślą o dzieciach i
        młodzieży. Forma spektaklu jest bardzo atrakcyjna, dopasowana do poziomu
        percepcji uczniów, pobudza również aktywność intelektualną uczestników
        przedstawienia oraz daje interesujący pogląd na matematykę, fizykę
        poprzez sztukę iluzji. Współudział uczniów w rozwiązywaniu zadań w
        trakcie spektaklu wywiera pozytywny wpływ na tworzenie aktywnych i
        twórczych postaw. Sztuka iluzji dostarcza miłych wrażeń, niezapomnianych
        przeżyć oraz korzystnie wpływa 6 na rozwój wyobraźni i logicznego
        myślenia.
        <br />
        Spektakl ''Tajemnice Iluzji'' jest przygotowany z myślą o dzieciach i
        młodzieży. Forma spektaklu jest bardzo atrakcyjna, dopasowana do poziomu
        percepcji uczniów, pobudza również aktywność intelektualną uczestników
        przedstawienia oraz daje interesujący pogląd na matematykę, fizykę
        poprzez sztukę iluzji. Współudział uczniów w rozwiązywaniu zadań w
        trakcie spektaklu wywiera pozytywny wpływ na tworzenie aktywnych i
        twórczych postaw. Sztuka iluzji dostarcza miłych wrażeń, niezapomnianych
        przeżyć oraz korzystnie wpływa 6 na rozwój wyobraźni i logicznego
        myślenia.
      </p> */}
    </main>
  );
}
