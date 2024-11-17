"use client";
import { useLayoutEffect, useRef, useState } from "react";
import style from "./styleheader.module.scss";
import NavbarS from "../navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Buttonx from "../../common/roundedbutton";

const Header = () => {
  const [isMenu, setMenu] = useState(false); // Single state for navbar visibility
  const targertBurger = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(targertBurger.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(targertBurger.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(targertBurger.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });
  }, []);

  const toggleMenu = () => {
    setMenu((prev) => !prev); // Toggle navbar visibility
  };

  return (
    <>
      <nav className="fixed z-50">
        <div className={style.header}>
          <div ref={targertBurger} className={style.headerButtonContainer}>
            <Buttonx onClick={toggleMenu} className={style.button}>
              <div
                className={`${style.burger} ${
                  isMenu ? style.burgerActive : ""
                }`}
              ></div>
            </Buttonx>
          </div>

          <AnimatePresence mode="exit">
            {isMenu && <NavbarS toggleMenu={toggleMenu} />}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Header;
