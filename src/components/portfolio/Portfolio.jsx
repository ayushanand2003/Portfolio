import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Resume Builder",
    img: "https://raw.githubusercontent.com/ayushanand2003/Portfolio/main/public/Resume%20Builder.png",
    desc: "Engineered with React, HTML, CSS, and JavaScript, this Resume Builder offers a dynamic platform to craft and customize professional resumes. Utilizing cutting-edge web technologies, it enables seamless personalization for a tailored representation of skills and experience. Explore a robust toolset designed to enhance your professional profile.",
    demoLink: "https://ayushanand2003.github.io/react_resume-builder/",
   
  },
  {
    id: 2,
    title: "React Portfolio",
    img: "https://raw.githubusercontent.com/ayushanand2003/Portfolio/main/public/React%20Portfolio.png",
    desc: "Constructed with a robust tech stack including HTML, SCSS (SASS), React, Vite, and Framer Motion, this portfolio website harmonizes creativity with technology. Vite ensures rapid performance, while React provides dynamic interactivity. The utilization of SCSS (SASS) facilitates structured and reusable styling. Framer Motion enriches the user experience with seamless animations. Dive into a curated collection of projects, skills, and experiences presented in an intuitive and visually captivating manner.",
    demoLink: "https://ayushanand2003.github.io/Portfolio/",
  },
  {
    id: 3,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    demoLink: "https://www.example.com/demo",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    demoLink: "https://www.example.com/demo",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
       
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
              <button>Click For Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
