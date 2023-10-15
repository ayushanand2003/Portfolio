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

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
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
          <img src="/web.png" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>LATEST</motion.b> WORK
          </h1>
        </div>
       
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Project 1</h2>
          <p>
                A brief description of Project 1 goes here. 
                Highlight the key features and technologies used.

          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Project 2</h2>
          <p>
          A brief description of Project 2 goes here. 
                Highlight the key features and technologies used.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Project 3</h2>
          <p>
          A brief description of Project 3 goes here. 
                Highlight the key features and technologies used.
          </p>
          <button>Go</button>
        </motion.div>
      
      </motion.div>
    </motion.div>
  );
};

export default Services;
