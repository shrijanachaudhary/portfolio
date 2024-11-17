import { inter } from "../fonts/inter.ts";
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground.tsx";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle.tsx";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-screen w-full justify-center"
      id="home"
      initial="initial"
      animate="animate"
    >
      <HeroBackground />
      <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
        <div
          className={`relative flex flex-col items-center justify-center ${inter.className} pointer-events-none`}
        >
          <AnimatedTitle
            text={"Hi I'm Shrijana Chaudhary."}
            className="mb-1 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
            wordSpace="mr-[10px]"
            charSpace="mr-[0.001em]"
          />
          <div className="pointer-events-auto mt-4 flex gap-3">
            <a
              href="mailto:cshrijana64@gmail.com"
              className="group relative overflow-hidden rounded-full bg-black transition-transform hover:scale-105"
            >
              <button className="flex h-12 items-center justify-center gap-2 px-6 py-2 text-sm font-semibold text-white transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[17px] w-[17px] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                Get In Touch
              </button>
            </a>
            <a
              href="/portfolio/cv/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-full border-2 border-black bg-white transition-transform hover:scale-105"
            >
              <button className="flex h-12 items-center justify-center gap-2 px-6 py-2 text-sm font-semibold text-black transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
