"use client";
import React, { useState } from "react";
import { useEffectOnce, useEventListener } from "usehooks-ts";

import PreLoader from "./components/other/PreLoader";
import ActiveSectionContextProvider from "./common/stores/active-section/index.tsx";
import useBlobity from "./components/blobity/useBlobity";

import Blur from "./components/overlay/Blur";
import Color from "./components/overlay/Color";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Tools from "./sections/Tools.tsx";
import Experience from "./sections/experience.tsx";
import Header from "./components/header/Header.jsx";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffectOnce(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    setIsMobile(window.innerWidth < 768);
  });

  useEventListener("resize", () => {
    setIsMobile(window.innerWidth < 768);
  });

  useBlobity({
    licenseKey: "opensource",
    focusableElementsOffsetX: 4,
    focusableElementsOffsetY: 4,
    color: "#ffffff",
    dotColor: "#ffffff",
    invert: true,
    focusableElements:
      "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
    font: "'Inter', sans-serif",
    fontSize: 16,
    fontWeight: 900,
    opacity: 1.0,
    fontColor: "#ffffff",
    zIndex: 35,
    size: 50,
    radius: 5,
    magnetic: false,
  });

  return (
    <>
      <PreLoader />
      <Blur />
      <Color />

      <ActiveSectionContextProvider>
        <Header />
        <NavBar />
        <main className="flex flex-col items-center justify-center bg-black">
          <Hero />
          <About />
          <Work />
          {/* <Tools /> */}
          <Experience />
          <Contact />
          <Footer />
        </main>
      </ActiveSectionContextProvider>
    </>
  );
}
