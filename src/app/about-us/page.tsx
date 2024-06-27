import Image from "next/image";
import "./styles.scss";
import aleksandrTkaczImage from "../../../public/AleksandrTkacz.jpeg";

export default function About(): JSX.Element {
  return (
    <section className="about">
      <h1>Witamy w Teatrze iluzji Aleksandra Tkacza!</h1>
      <p className="description o_nas">
        Witamy w Teatrze iluzji, w świecie bezgranicznej fantazji! Od wielu lat
        zajmujemy się sztuką iluzji, robimy w życiu to, co lubimy i umiemy
        najlepiej: tworzymy niezwykłe przedstawienia, pełne magii i
        tajemniczości; marzymy o rzeczach niemożliwych i realizujemy to na
        scenie; bawimy naszych widzów oraz rozwijamy ich wyobraźnię; dostarczamy
        pozytywnych wrażeń, niezapomnianych przeżyć, czasami wzruszamy;
        odpowiadamy na pytania...
      </p>
      <p className="description o_nas">
        Czym jest magia? To marzenia, które się spełniają!
      </p>
      <div className="imgwrap">
        <Image
          className="img"
          src={aleksandrTkaczImage}
          alt="Iluzionista Aleksandr Tkacz photograph"
        ></Image>
      </div>
      <p className="description">
        Aleksander Tkacz. <br />
        Pedagog, twórca, aktor, Iluzjonista.
      </p>
      <p className="description o_nas">
        Na początku swojej kariery zawodowej występował z programem scenicznej
        hipnozy dla dorosłej publiczności pod tytułem " Niesamowite, ale
        oczywiste " Będąc studentem psychologii i pedagogiki pogłębiał wiedzę z
        zakresu technik motywacyjnych, sugestii, mentalizmu oraz psygologicznej
        iluzji. Jednak z czasem wybrał iluzję, ponieważ jest sztuką syntetyczną,
        sztuką, która otwiera wiele tajemnic, rozwija umysł, pozwala na bliższy
        kontakt z publicznością, dostarcza nie tylko rozrywkę widzom, ale i
        satysfakcję wykonawcy. Będąc absolwentem Wyższej Szkoły Pedagogicznej,
        Aleksander Tkacz prowadzi kółko "Młody iluzjonista ". Opracowuje
        specjalny program, pozwalający dzieciom uczyć się prostych trików,
        rozwijać wyobraźnię, logiczne myślenie oraz koordynację ruchów, co daje
        możliwość nie tylko łatwiej nawiązywać kontakt z rówieśnikami, a przede
        wszystkim czuć się czarodziejem, spełniającym marzenia!
      </p>
    </section>
  );
}
