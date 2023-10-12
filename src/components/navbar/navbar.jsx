import "./navbar.scss"

const Navbar = () => {
    return(
        <div className="navbar">
            {/* sidebar */}
            <div className="wrapper">
                <span>Ayush Anand</span>
                <div className="social">
                    <a href="#"><img src="/github.png" alt="Github" /></a>
                    <a href="#"><img src="/linkedin.png" alt="Linkedin" /></a>
                    <a href="#"><img src="/instagram.png" alt="Insta" /></a>            
                </div>
            </div>
            
    
        </div>
    )
}
export default Navbar;