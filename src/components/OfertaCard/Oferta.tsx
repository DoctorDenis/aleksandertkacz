"use client";
import React, { useState } from "react";
import Image from "next/image";

import "./oferta.scss";
import { Accordion } from "react-bootstrap";
import tajemniceIluzjiImage from "../../../public/94e133a0-6981-4578-8b5e-2390d561d1e8.jpeg";
import marzeniaSięSpełniają from "../../../public/4eb997b6-4313-4d64-b1d5-d463ff8d3580.jpeg";
import wielkanocnyPokazMagii from "../../../public/ce2f7772-e1a6-403b-badd-3401868786d3.jpeg";
import magiaSwiąt from "../../../public/cb8b51eb-a75e-4319-828b-227fce5b5cb2.jpeg";
import magicznieIKolorowo from "../../../public/bc009bb2-565e-4cae-a647-27c5f5ef99f3.jpeg";

export default function Oferta() {
  return (
    <Accordion data-bs-theme="dark" className="acc  outter">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Dzieci i młodzież</Accordion.Header>
        <Accordion.Body>
          <Accordion data-bs-theme="dark" className="acc">
            <Accordion.Item eventKey="0.1">
              <Accordion.Header>Oferta dla szkół podstawowych</Accordion.Header>
              <Accordion.Body>
                <p>
                  Preferujemy naukowe podejście do sztuki iluzji, gałęzi sztuki
                  estradowej, w której środki wyrazu artystycznego tworzone są w
                  oparciu o umiejętności wywoływania zjawisk pozornie
                  sprzecznych z prawami fizyki.
                </p>
                <p>W naszej ofercie znajdziecie:</p>
                <Accordion data-bs-theme="dark" className="acc" id="acc">
                  <Accordion.Item eventKey="0.1.1">
                    <Accordion.Header>
                      Spektakl "Tajemnice Iluzji"
                    </Accordion.Header>
                    <Accordion.Body>
                      <Image
                        className="img"
                        src={tajemniceIluzjiImage}
                        alt="Spektakl Tajemnice iluzji photograph"
                      ></Image>
                      <p>
                        Spektakl „Tajemnice iluzji” jest przygotowany z myślą o
                        dzieciach w wieku szkolnym i jest tematycznie dopasowany
                        do grupy wiekowej dla klas 0-4 oraz 5-8. Celem spektaklu
                        jest pobudzenie aktywności intelektualnej uczestników,
                        rozwój wyobraźni oraz logicznego myślenia, pozytywny
                        wpływ na tworzenie aktywnych i twórczych postaw,
                        zgłębianie naukowych zasad, dzięki którym istnieje
                        iluzja, nowy interesujący pogląd na matematykę i fizykę
                        w świetle sztuki iluzji, dostarczenie niezapomnianych
                        przeżyć! Dzięki sztuce iluzji dzieci mogą na chwilę
                        przenieść się do magicznego świata, którego będą
                        częścią. Iluzja wymaga logicznego myślenia, wyobraźni
                        oraz kreatywności, co jest bardzo istotne przy rozwoju
                        każdego dziecka.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="0.1.2">
                    <Accordion.Header>
                      Edukacyjny spektakl iluzji "Marzenia się Spełniają"
                    </Accordion.Header>
                    <Accordion.Body>
                      <Image
                        className="img"
                        src={marzeniaSięSpełniają}
                        alt="Spektakl iluzji Marzenia się Spełniają photograph"
                      ></Image>
                      <p>
                        W interaktywnym spektaklu iluzji pokażemy widzom jak
                        spełniać swoje marzenia oraz udowodnimy, że wszystko o
                        czym marzymy, czego pragniemy – jest w zasięgu naszej
                        ręki!
                      </p>
                      <p>
                        Odpowiemy na pytania:
                        <ul>
                          <li>o czym marzymy?</li>
                          <li>po co są marzenia?</li>
                          <li>skąd się biorą marzenia?</li>
                          <li>dlaczego warto marzyć?</li>
                          <li>czy marzenia napędzają nas do działania?</li>
                          <li>
                            czy za każdym kolejnym marzeniem kryje się następne?
                          </li>
                          <li>
                            czy marzenia z okresu dzieciństwa zostają z nami na
                            zawsze?
                          </li>
                          <li>czy marzenia są po to, aby je spełniać?</li>
                          <li>
                            co musimy zrobić, żeby osiągać cele i spełniać nasze
                            marzenia?
                          </li>
                          <li>
                            czy warto być czarodziejem, spełniającym marzenia?
                          </li>
                        </ul>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="0.1.3">
                    <Accordion.Header>Wielkanocny pokaz magii</Accordion.Header>
                    <Accordion.Body>
                      <Image
                        className="img"
                        src={wielkanocnyPokazMagii}
                        alt="Wielkanocny pokaz magii photograph"
                      ></Image>
                      <p>
                        Podczas 45 minutowego interaktywnego magicznego show
                        zabierzemy dzieci do świata magii. Przy pomocy
                        widowiskowych, ale zarazem prostych sztuczek magicznych
                        dzieci osobiście będą miały okazję przekonać się jak
                        magia dzieję się na ich oczach, a także same przekonają
                        się, że potrafią czarować, unosić się w powietrzu,
                        wyczarować pieniądze oraz cukierki, teleportować obrazy,
                        pojawiać króliki i nie tylko... Pokaz sztuczek
                        magicznych to nie tylko świetna wielkanocna atrakcja dla
                        dzieci, ale także familijne show pełne śmiechu i
                        niezapomnianych wrażeń! Po spektaklu będzie możliwość
                        zrobienia zdjęć z wyczarowanym królikiem.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="0.1.4">
                    <Accordion.Header>
                      Spektakl dla dzieci "Magia świąt"
                    </Accordion.Header>
                    <Accordion.Body>
                      <Image
                        className="img"
                        src={magiaSwiąt}
                        alt="Spektakl dla dzieci Magia świąt photograph"
                      ></Image>
                      <p>
                        Spektakl, w którym dzieci są aktywnymi uczestnikami
                        tego, co się dzieje na scenie. Podczas 45 minutowego
                        spektaklu, widzów czeka magiczna podróż, w której
                        niemożliwe na oczach całej publiczności staje się
                        możliwe. Zamiana w królika, wyczarowywanie cukierków,
                        przepowiednia z bałwanem, teleportacja, etiuda z
                        latającym stolikiem w towarzystwie sporej dawki śmiechu.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="0.1.5">
                    <Accordion.Header>Wielka Atrakcja</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        MAGICZNE POJAWIENIE SIĘ ŚWIĘTEGO MIKOŁAJA z workiem
                        niespodzianek dla dzieci!
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0.2">
              <Accordion.Header>Oferta dla przedszkoli</Accordion.Header>
              <Accordion.Body>
                <Accordion data-bs-theme="dark" className="acc">
                  <Accordion.Item eventKey="0.2.1">
                    <Accordion.Header>
                      Edukacyjny spektakl „Magicznie i kolorowo”
                    </Accordion.Header>
                    <Accordion.Body>
                      <Image
                        className="img"
                        src={magicznieIKolorowo}
                        alt="Edukacyjny spektakl Magicznie i kolorowo photograph"
                      ></Image>
                      <p>
                        Celem spektaklu jest pobudzenie aktywności
                        intelektualnej uczestników, rozwój wyobraźni oraz
                        logicznego myślenia, pozytywny wpływ na tworzenie
                        aktywnych i twórczych postaw, wspieranie rozwoju dziecka
                        w kierunku wrażliwości estetycznej, dostarczenie
                        pozytywnych emocji i niezapomnianych przeżyć! Pokaz jest
                        efektowny i jedyny w swoim rodzaju. Iluzja wymaga
                        logicznego myślenia, wyobraźni oraz kreatywności co jest
                        bardzo istotne dla wszechstronnego rozwoju każdego
                        dziecka. Dzięki sztuce iluzji dzieci mogą na chwilę
                        przenieść się do magicznego świata, którego będą
                        częścią, poznają również atrybuty iluzjonisty. Bardzo
                        ważnym elementem spektaklu jest walor edukacyjny:
                        połączenie nauki kolorów i kształtów z muzyką klasyczną.
                        Spektakl przebiega w taki sposób, by jego uczestnicy nie
                        byli tylko biernymi obserwatorami, ale również brali
                        czynny udział w prezentowaniu wspaniałych efektów
                        iluzjonistycznych.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0.3">
              <Accordion.Header>Warsztaty iluzji</Accordion.Header>
              <Accordion.Body>
                <h4>Edukacyjne warsztaty iluzji Dla klas 0-4 i 5-8!</h4>
                <p>
                  Naszą misją jest świadczenie usług, których cel można określić
                  jednym słowem: ROZWÓJ! Dzieci warto rozwijać na różnych
                  płaszczyznach, dlatego zachęcamy do skorzystania z
                  edukacyjnych warsztatów iluzji, które są świetnym pomysłem na
                  urozmaicenie lekcji. Warsztaty iluzji to nie tylko doskonała
                  zabawa, ale także okazja do zdobywania wiedzy. Podczas
                  warsztatów dzieci odkryją niejedną magiczną tajemnicę, nauczą
                  się wykonywać proste triki poprzez interaktywne eksperymenty,
                  kreatywne działania oraz będą miały możliwość poćwiczyć
                  nietypowe umiejętności. Cały proces nauki trików staje się
                  fascynujący i angażujący, dzieci osobiście będą miały okazję
                  przekonać się, że potrafią czarować, co sprawi im wielką
                  radość i satysfakcję!
                </p>
                <ul>
                  <li>Warsztaty dla grup organizujemy we wskazanej placówce</li>
                  <li>
                    Dbamy o komfort oraz bezpieczeństwo pod czas warsztatów
                  </li>
                  <li>Jesteśmy punktualni i dajemy z siebie wszystko</li>
                  <li>
                    Szczególne wymagania techniczne – wszystko przywozimy ze
                    sobą!
                  </li>
                </ul>
                <Accordion data-bs-theme="dark" className="acc">
                  <Accordion.Item eventKey="0.3.1">
                    <Accordion.Header>
                      Przykładowy program dla klas 0-4.
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Efekty iluzjonistyczne dla najmłodszych opracowane są
                        specjalnie z myślą o dziecięcej wyobraźni oraz ogromnej
                        chęci uczestniczenia w niezwykłych wydarzeniach.{" "}
                      </p>
                      <ul>
                        <li>Wprowadzenie</li>
                        <li>Zapoznanie dzieci z atrybutami iluzjonisty</li>
                        <li>Interaktywne zajęcia</li>
                        <li>Samodzielnie wykonywanie rekwizytów</li>
                        <li>Nauka prostych trików</li>
                        <li>Ćwiczenia</li>
                        <li>Przymierzanie stroju czarodzieja</li>
                        <li>Wielki finał: każdy może zostać czarodziejem.</li>
                      </ul>
                      <p>Występ przed publicznością.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="0.3.2">
                    <Accordion.Header>
                      Przykładowy program dla klas 5-8.
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>Warsztaty z wykładem o roli nauki w sztuce iluzji.</p>
                      <p>
                        Efekty dla dzieci klas starszych oparte na umiejętności
                        wywoływania zjawisk pozornie sprzecznych z prawami
                        fizyki, złudzeniach optycznych oraz zagadkach
                        matematycznych.
                      </p>
                      <ul>
                        <li>Wprowadzenie</li>
                        <li>Nauka nie musi być nudna</li>
                        <li>Fizyka w iluzji</li>
                        <li>Magia matematyki</li>
                        <li>Co ma wspólnego muzyka i iluzja</li>
                        <li>Nauka trików</li>
                        <li>Ćwiczenia</li>
                        <li>Pokaz przed publicznością</li>
                        <li>Zawód: iluzjonista</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0.4">
              <Accordion.Header>
                Oferta dla szkół ponadpodstawowych
              </Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Eventy komercyjne</Accordion.Header>
        <Accordion.Body>
          <Accordion data-bs-theme="dark" className="acc">
            <Accordion.Item eventKey="1.1">
              <Accordion.Header>Pokazy sceniczne</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1.2">
              <Accordion.Header>
                Pełnowartościowe widowisko z antraktem
              </Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1.3">
              <Accordion.Header>Mikroiluzja/CLOSE-UP</Accordion.Header>
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
  );
}
