import styles from "./stylenavbar.module.scss";
import Links from "./link";
import { motion } from "framer-motion";
import { menuSlider } from "./anima";
import Curve from "./curve/Curve";

const NavbarS = ({ toggleMenu }) => {
  const navItems = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Works", href: "#work" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <motion.div
      variants={menuSlider}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation Menu</p>
            <button onClick={toggleMenu} className={styles.closeButton}>
              ×
            </button>
          </div>

          {navItems.map((item, index) => (
            <Links
              key={index}
              data={{ ...item, index }}
              toggleMenu={toggleMenu}
            />
          ))}
        </div>
        <div className={styles.footer}>
          <a href="/">Awward</a>
          <a href="/">Instagram</a>
          <a href="/">Dribble</a>
          <a href="/">Twitter</a>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default NavbarS;
