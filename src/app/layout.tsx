"use client";
import type { Metadata } from "next";
// import Image from "next/image";
import Link from "next/link";
import { rootStateType } from "../helpers/types and interfaces";
import Header from "../components/Navigation/Header";
import { Inter } from "next/font/google";
import "normalize.css";
import "../app/globals.css";
import "./page.scss";
import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { hiddenStateReducer } from "@/helpers/reducers";

const inter = Inter({ subsets: ["latin"] });

const rootState: Required<rootStateType> = { hidden: true, dispatch: () => {} };

export const DispatchContext = createContext(rootState.dispatch);

const metadata: Metadata = {
  title: "Iluzjonista Aleksander Tkacz",
  description: "Webpage of the Iluzjonista Aleksander Tkacz",
  keywords:
    "Iluzjonista, magician, Master of Illusion, magiczne sztuczki, master of illusion, Illusionist, Sorcerer, Wizard, Conjurer, Enchanter, Spellcaster, Prestidigitator, Mage, Necromancer, Trickster, illusionist, sorcerer, wizard, conjurer, enchanter, spellcaster, prestidigitator, mage, necromancer, trickster, iluzjonista, czarodziej, mag, conjurer, czarownik, zaklinacz, prestidigitator, czarodziej, czarnoksiężnik, magik, sztukmistrz, żongler, nekromanta, Czarodziej, Mag, Conjurer, Czarownik, Zaklinacz, Prestidigitator, Mag, Nekromanta",
};

export default function RootLayout({
  children,
}: {
  children: NonNullable<React.ReactNode> & { props: Function };
}) {
  const [state, dispatch] = useReducer(hiddenStateReducer, rootState);

  return (
    <html lang="pl">
      <body className={inter.className}>
        <DispatchContext.Provider value={dispatch}>
          <Header></Header>
          <main className="main">{children}</main>
          <Link href="/contacts" className={`${state.hidden ? "hidden" : ""}`}>
            <div id="reservation" className="reserve">
              <p>Zarezerwuj termin, zanim zniknie!</p>
            </div>
          </Link>
        </DispatchContext.Provider>
      </body>
    </html>
  );
}
