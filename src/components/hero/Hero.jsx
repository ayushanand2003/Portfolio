import "./hero.scss";
import { motion } from "framer-motion";

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
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-520%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 30,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>AYUSH ANAND</motion.h2>
          <motion.h1 variants={textVariants}>
          Software Engineer 
          Full Stack Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.a variants={textVariants} href="#Latest Work">
                <button>
                  See the Latest Works
                </button>
              </motion.a>

              <motion.a variants={textVariants} href="#Contact">
                <button>
                  Contact Me
                </button>
              </motion.a>

          </motion.div>

          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        OPEN SOURCE MERN STACK
      </motion.div>
      <div className="imageContainer">
        <img src="" alt="dist/hero1.png" />
      </div>
    </div>
  );
};

export default Hero;
