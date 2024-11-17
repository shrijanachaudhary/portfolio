import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./stylecurve.module.scss";

const Curve = () => {
  const [initalPath, setInitialPath] = useState("");
  const [targetPath, setTargetPath] = useState("");

  useEffect(() => {
    const height = window.innerHeight;

    // Define the paths based on window height
    setInitialPath(`M100 0 L100 ${height} Q-100 ${height / 2} 100 0`);
    setTargetPath(`M100 0 L100 ${height} Q100 ${height / 2} 100 0`);
  }, []); // Empty dependency array ensures this runs once on mount

  // Path animation variants
  const pathAnimaction = {
    initial: {
      d: initalPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initalPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className={styles.svgCurve}>
      {initalPath && targetPath && (
        <motion.path
          variants={pathAnimaction}
          initial="initial"
          animate="enter"
          exit="exit"
        />
      )}
    </svg>
  );
};

export default Curve;
