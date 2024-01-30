"use client";

import styles from "./navigation.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className={styles.header}>
      <h1 className={styles.header__text}>Master of illusion</h1>
      <h2 className={styles.header__name}>Aleksander Tkacz</h2>
      <ul className={styles.nav_bar}>
        <li className={styles.nav_bar__item}>
          <Link href={"/kids-and-youth"}>Dzieci i młodzież</Link>
          <ul className={styles.sub_menu}>
            <li className={styles.nav_bar__item}>
              <Link href={"/primary-school-offer"}>
                Oferta dla szkół podstawowych
              </Link>
            </li>
            <li className={styles.nav_bar__item}>
              <Link href={"/secondary-school-offer"}>
                Oferta dla szkół ponadpodstawowych
              </Link>
            </li>
            <li className={styles.nav_bar__item}>
              <Link href={"/kindergarten-offer"}>Oferta dla przedszkoli</Link>
            </li>
            <li className={styles.nav_bar__item}>
              <Link href={"/illusion-workshops"}>Warsztaty iluzji</Link>
            </li>
          </ul>
        </li>

        <li className={styles.nav_bar__item}>
          <Link href={"/commercial-events"}>Eventy komercyjne</Link>
        </li>
        <li className={styles.nav_bar__item}>
          <Link href={"/about-us"}>O nas</Link>
        </li>
        <li className={styles.nav_bar__item}>
          <Link href={"/contacts"}>Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}

// export default function Navigation() {
//   return (
//     <>
//       <h1 className={styles.header}>Master of illusion</h1>
//       <h2 className={styles.name}>Aleksander Tkacz</h2>
//       <Navbar expand="lg" className={styles.nav_bar} bg="bg-primary-subtle">
//         <Navbar.Toggle
//           aria-controls="basic-navbar-nav"
//           className={styles.nav_bar__toggle}
//         />
//         <Navbar.Collapse
//           id="basic-navbar-nav"
//           className="justify-content-between"
//         >
//           <NavDropdown
//             title="Dzieci i młodzież"
//             id="basic-nav-dropdown"
//             className={styles.nav_bar__dropdown}
//           >
//             <NavDropdown.Item href="/primary-school-offer">
//               Oferta dla szkół podstawowych
//             </NavDropdown.Item>
//             <NavDropdown.Item href="/secondary-school-offer">
//               Oferta dla szkół ponadpodstawowych
//             </NavDropdown.Item>
//             <NavDropdown.Item href="/kindergarten-offer">
//               Oferta dla przedszkoli
//             </NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="/illusion-workshops">
//               Warsztaty iluzji
//             </NavDropdown.Item>
//           </NavDropdown>
//           {/* <Nav className=""> */}
//           <Nav.Link href="/commercial-events">Eventy komercyjne</Nav.Link>
//           <Nav.Link href="/about-us">O nas</Nav.Link>
//           <Nav.Link href="/contacts">Kontakt</Nav.Link>
//           {/* </Nav> */}
//         </Navbar.Collapse>
//       </Navbar>
//     </>
//   );
// }
