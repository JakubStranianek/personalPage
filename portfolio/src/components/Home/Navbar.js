import '../Home/Navbar.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
 

import HomeComp from "../Home/Home"
import AboutComp from "../About/About"

const ShowLinks = () => {
       return (
       <ul>
           <li><Link to="hero">Home</Link></li>
           <li><Link to="about">About</Link></li>
           <li><Link to="services">Services</Link></li>
           <li><Link to="portfolio">Portfolio</Link></li>
           <li><Link to="contactMe">Contact Me</Link></li>
        </ul>
       );
}

function Navbar() {
   return (
       <Router>
           <ShowLinks />
           <Routes>
              <Route path="hero" element={HomeComp} />
              <Route path="about" element={AboutComp} />
           </Routes>
       </Router>
   ); 
}

export default Navbar;