import "./app.scss"
import Navbar from "./components/navbar/navbar";
import Test from "./Test";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return <div>
    <section id='Homepage'> <Navbar/> </section>
    <section id='Services'>Parallax</section>
    <section id='Portfolio'>Services</section>
    <section>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='Contact'>Contact</section>

    {/* <Test/>
    <Test/> */}
    
  </div>;
};

export default App;
