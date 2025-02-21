import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const hoverEffect = {
  scale: 1.05,
  transition: {
    duration: 0.3,
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Take a glimpse into my recent Projects 
          <br />
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="https://raw.githubusercontent.com/ayushanand2003/Portfolio/main/public/web.png" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange", scale: 1.2 }}>LATEST</motion.b> WORK
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black", ...hoverEffect }}
        >
          <h2>Panoray Ventures Website</h2>
          <p>
          Website for a VC/WEB3 firm. The website is built using React, Next.js, and Tailwind CSS. The website is fully responsive and has a clean and modern design. The website is also integrated with CMS for easy content management.
          </p>
          <button onClick={() => window.location.href="#project-1"}>Go to Panoray Ventures</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black", ...hoverEffect }}
        >
          <h2>Newrro Website</h2>
          <p>
          Website for a Startup company. The website is built using React, Next.js, and Tailwind CSS. The website is fully responsive and has a clean and modern design. The website is also integrated with CMS for easy content management.
          </p>
          <button onClick={() => window.location.href="#project-2"}>Go to Newrro </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
