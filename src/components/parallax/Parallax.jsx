import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #110132, #501064)",
      }}
    >
      <motion.div className="img">

      <motion.img
      variants={textVariants}
      animate="scrollButton"
      src="https://raw.githubusercontent.com/ayushanand2003/Portfolio/main/public/scroll.png"
      alt=""
    />
    </motion.div>  
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "LATEST WORK" : "ALL PROJECTS"}
      </motion.h1>
      
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="cartoons"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "https://raw.githubusercontent.com/ayushanand2003/Portfolio/main/public/shindoc.png" : "https://raw.githubusercontent.com/ayushanand2003/Portfolio/main/public/doradoc.png"
          })`,
        }}
      ></motion.div>
      
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
      
      
      
    </div>
  );
};

export default Parallax;
