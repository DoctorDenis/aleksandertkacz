import "./styles.scss";
import Image from "next/image";

import phoneIcon from "../../../public/old-phone-icon.png";
import mailIcon from "../../../public/email-icon.png";
import facebookIcon from "../../../public/facebook-icon.png";

export default function Contacts(): JSX.Element {
  return (
    <div className="contacts-page">
      <h1>Skontaktuj się z nami!</h1>
      <section className="contacts section">
        {/* <p>Zadzwoń do nas</p> */}
        <a href="tel:+48885274205" className="link contact">
          <Image alt={"phone icon"} src={phoneIcon} className="icon"></Image>
          +48 885 274 205
        </a>
        <a href="tel:+48603274205" className="link contact">
          <Image alt={"phone icon"} src={phoneIcon} className="icon"></Image>
          +48 603 274 205
        </a>
        {/* <p>Napisz do nas</p> */}
        <a href="mailto:antoninatkacz@gmail.com" className="link contact">
          <Image alt={"mail icon"} src={mailIcon} className="icon"></Image>
          antoninatkacz@gmail.com
        </a>
        {/*  */}
        <a
          href="https://www.facebook.com/Iluzjonista-Aleksander-Tkacz-100041476492110/"
          className="link contact"
          target="_blank"
        >
          <Image alt={"mail icon"} src={facebookIcon} className="icon"></Image>
          <p>Iluzjonista Aleksander Tkacz</p>
        </a>
      </section>
    </div>
  );
}
