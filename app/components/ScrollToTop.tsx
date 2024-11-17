"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useMedia from "use-media";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Media queries for responsive breakpoints
  const isMobile = useMedia({ maxWidth: "768px" });
  const isSmallMobile = useMedia({ maxWidth: "480px" });

  // Toggle visibility based on scroll position
  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const buttonStyles = {
    position: "fixed",
    right: "20px",
    width: isSmallMobile ? "35px" : isMobile ? "40px" : "40px",
    height: isSmallMobile ? "35px" : isMobile ? "40px" : "40px",
    borderRadius: "50%",
    backgroundColor: "#212531",
    color: "#ffffff",
    fontSize: isSmallMobile ? "1.25rem" : isMobile ? "1.5rem" : "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    zIndex: 50,
    opacity: isVisible ? 1 : 0,
    pointerEvents: isVisible ? "auto" : "none",
    transition: "opacity 0.3s ease",
    bottom: isSmallMobile ? "70px" : isMobile ? "50px" : "30px",
  };

  return (
    <motion.div
      style={buttonStyles as React.CSSProperties}
      onClick={scrollToTop}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      title="Scroll to Top"
    >
      ↑
    </motion.div>
  );
};

export default ScrollToTop;
