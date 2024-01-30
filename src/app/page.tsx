/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>TEATR ILUZJI ALEKSANDRA TKACZA</h1>
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
      </p>
    </main>
  );
}
