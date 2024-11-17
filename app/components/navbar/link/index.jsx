import stylesLINK from "./stylelink.module.scss";
import { motion } from "framer-motion";
import { sldier } from "../anima";

const Links = ({ data, toggleMenu }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (toggleMenu) toggleMenu();
    const targetElement = document.querySelector(data.href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      custom={data.index}
      variants={sldier}
      animate="enter"
      exit="exit"
      initial="initial"
      className={stylesLINK.link}
      onClick={handleClick}
    >
      <a href={data.href}>{data.title}</a>
    </motion.div>
  );
};

export default Links;
