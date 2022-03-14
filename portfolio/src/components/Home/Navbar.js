import '../Home/Navbar.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
 

import HomeComp from "../Home/Home"
import AboutComp from "../About/About"

const ShowLinks = () => {
       return (
       <ul>
           <li><Link to="home">Home</Link></li>
           <li><Link to="about" onClick={goToAbout}>About</Link></li>
           <li><Link to="skills" onClick={goToSkills}>Skills</Link></li>
           <li><Link to="portfolio" onClick={goToPortfolio}>Portfolio</Link></li>
           <li><Link to="contactMe" onClick={goToContact}>Contact Me</Link></li>
        </ul>
       );
}

const goToAbout = () => {
    var about = document.getElementsByClassName('about')[0];
    window.scrollTo({top: about.offsetTop, behavior: "smooth"})
}

const goToSkills = () => {
    var skills = document.getElementsByClassName('skills')[0];
    window.scrollTo({top: skills.offsetTop, behavior: "smooth"})
}

const goToPortfolio = () => {
    var portfolio = document.getElementsByClassName('portfolioLogo')[0];
    window.scrollTo({top: portfolio.offsetTop, behavior: "smooth"})
}

const goToContact = () => {
    var contact = document.getElementsByClassName('contactMe')[0];
    window.scrollTo({top: contact.offsetTop, behavior: "smooth"})
}

function Navbar() {
   return (
       <Router>
           <ShowLinks />
           <Routes>
              <Route path="home" element={HomeComp} />
              <Route path="about" element={AboutComp} />
              <Route path="skills" element={AboutComp} />
              <Route path="portfolio" element={AboutComp} />
              <Route path="contactMe" element={AboutComp} />
           </Routes>
       </Router>
   ); 
}

export default Navbar;