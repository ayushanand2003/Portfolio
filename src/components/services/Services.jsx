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
          <img src="https://raw.githubusercontent.com/ayushanand2003/Portfolio/main/public/web.png" alt="" />
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
          <h2>Resume Builder</h2>
          <p>
          Engineered with React, HTML, CSS, and JavaScript, this Resume Builder offers a dynamic platform to craft and customize professional resumes. Utilizing cutting-edge web technologies, it enables seamless personalization for a tailored representation of skills and experience. Explore a robust toolset designed to enhance your professional profile.

          </p>
      
          <button onClick={() => window.location.href="#project-1"}>Go to Resume Builder</button>


        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>React Portfolio</h2>
          <p>
          Constructed with a robust tech stack including HTML, SCSS (SASS), React, Vite, and Framer Motion, this portfolio website harmonizes creativity with technology. Vite ensures rapid performance, while React provides dynamic interactivity. The utilization of SCSS (SASS) facilitates structured and reusable styling. Framer Motion enriches the user experience with seamless animations. Dive into a curated collection of projects, skills, and experiences presented in an intuitive and visually captivating manner.
          </p>
          <button onClick={() => window.location.href="#project-2"}>Go to React Portfolio</button>


        </motion.div>
      
      
      </motion.div>
    </motion.div>
  );
};

export default Services;
