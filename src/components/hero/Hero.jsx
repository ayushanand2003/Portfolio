import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <div className="textContainer">
                <h2>AYUSH ANAND</h2>
                <h1>Software Engineer 
                Full Stack Developer</h1>
                <div className="buttons">
                    <button>See the Latest Work</button>
                    <button>Contact Me</button>
                </div>
                <img src="/scroll.png" alt="" />
            </div>
        </div>     
        <div className="slidingTextContainer">
            
        </div>   
        <div className="imgContainer">
                <img src="/hero1.png" alt="Ayush img"  />
         </div>
           
    </div>
  )
}

export default Hero