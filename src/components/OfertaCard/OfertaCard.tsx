"use client";
import React, { useState } from "react";

import "./ofertaCard.scss";
import { Accordion } from "react-bootstrap";

export default function OfertaCard() {
  const [flipped, setFlipped] = useState(false);

  const flipCard: React.MouseEventHandler<HTMLDivElement> = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    setFlipped(!flipped);
  };

  return (
    // <div className="flip-card front" onClick={flipCard}>
    //   <div className={`flip-card-inner ${flipped ? " flipped" : ""}`}>
    //     <div className="flip-card-front">Oferta</div>
    //     <div className="flip-card-back">
    <Accordion data-bs-theme="dark">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Dzieci i młodzież</Accordion.Header>
        <Accordion.Body>
          <Accordion data-bs-theme="dark">
            <Accordion.Item eventKey="0.1">
              <Accordion.Header>Oferta dla szkół podstawowych</Accordion.Header>
              <Accordion.Body>
                {/*  */}
                <Accordion data-bs-theme="dark">
                  <Accordion.Item eventKey="0.1.1">
                    <Accordion.Header>Sekret Iluzji</Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="0.1.2">
                    <Accordion.Header>Marzenia się Spełniają</Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="0.1.3">
                    <Accordion.Header>Magia świąt</Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {/*  */}
              </Accordion.Body>
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
              <Accordion.Header>Mikro Iluzja (Closeup)</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1.2">
              <Accordion.Header>Pokaz sceniczny</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1.3">
              <Accordion.Header>Etiudy magii</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1.4">
              <Accordion.Header>
                Pełnowymiarowy spektakl z antraktiem
              </Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    //     </div>
    //   </div>
    // </div>
  );
}
