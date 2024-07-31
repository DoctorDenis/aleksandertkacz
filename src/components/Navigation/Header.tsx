"use client";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [showSubMenu, setShowSubMenu] = useState(false);

  function toggleSubMenu() {
    setShowSubMenu(!showSubMenu);
  }

  return (
    <>
      <header>
        <Link href="/" className={"logo"}>
          <h1 className="logo__text">Teatr iluzji</h1>
          <h2 className={"logo__name"}>Aleksandra Tkacza</h2>
        </Link>
      </header>
    </>
  );
}
