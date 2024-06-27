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
      {/* <header className={"header"}> */}
      {/* <nav className={"nav_bar"}>
          <Link href={"/about-us"} className={"nav_bar__item"}>
            O nas
          </Link>
          <span
            className={"nav_bar__item" + showSubMenu ? " active" : ""}
            onClick={toggleSubMenu}
          >
            Oferta
          </span>

          <Link href={"/commercial-events"} className={"nav_bar__item"}>
            Galeria
          </Link>

          <Link href={"/contacts"} className={"nav_bar__item"}>
            Kontakt
          </Link>
        </nav>
        <Accordion
          className={"sub_menu" + ""}
          data-bs-theme="dark"
          style={{ display: showSubMenu ? "block" : "none" }}
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Dzieci i młodzież</Accordion.Header>
            <Accordion.Body>
              <Accordion data-bs-theme="dark">
                <Accordion.Item eventKey="0.1">
                  <Accordion.Header>
                    Oferta dla szkół podstawowych
                  </Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0.2">
                  <Accordion.Header>
                    Oferta dla szkół ponadpodstawowych
                  </Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0.3">
                  <Accordion.Header>Oferta dla przedszkoli</Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0.4">
                  <Accordion.Header>Warsztaty iluzji</Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Eventy komercyjne</Accordion.Header>
            <Accordion.Body>
              <Accordion data-bs-theme="dark">
                <Accordion.Item eventKey="1.1">
                  <Accordion.Header>
                    Oferta dla szkół podstawowych
                  </Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1.2">
                  <Accordion.Header>
                    Oferta dla szkół ponadpodstawowych
                  </Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1.3">
                  <Accordion.Header>Oferta dla przedszkoli</Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1.4">
                  <Accordion.Header>Warsztaty iluzji</Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>*/}
      {/* </header> */}
    </>
  );
}
