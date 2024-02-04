"use client";
import React, { useState } from "react";

import "./ofertaCard.scss";
import { Accordion } from "react-bootstrap";

export default function OfertaCard() {
  const [flipped, setFlipped] = useState(false);

  const flipCard: React.MouseEventHandler<HTMLDivElement> = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    console.log(event.target);
    setFlipped(!flipped);
  };

  return (
    <div className="flip-card" onClick={flipCard}>
      <div className={`flip-card-inner ${flipped ? " flipped" : ""}`}>
        <div className="flip-card-front">Oferta </div>
        <div className="flip-card-back">
          <Accordion data-bs-theme="dark">
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
          </Accordion>
        </div>
      </div>
    </div>
  );
}
