import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
           AYUSH ANAND
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/ayushanand2003/" target="_blank">
            <img src="https://raw.githubusercontent.com/ayushanand2003/Portfolio/main/public/linkedin.png" alt="" />
          </a> 
          <a href="https://github.com/ayushanand2003" target="_blank">
            <img src="https://raw.githubusercontent.com/ayushanand2003/Portfolio/main/public/github.png" alt="" />
          </a>
          <a href="https://www.instagram.com/ayushshsh_/" target="_blank">
            <img src="https://raw.githubusercontent.com/ayushanand2003/Portfolio/main/public/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
