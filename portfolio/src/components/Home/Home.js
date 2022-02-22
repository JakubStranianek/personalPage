import "../Home/Home.css"
import HomeNavbar from "../Home/Navbar"
import HomeMain from "../Home/HomeMain"
import HomeFooter from "../Home/HomeFooter"
import ParticleBackground from "../Home/particleBackground";

function Home() {
    return (
        <div className="Home">
            <ParticleBackground />
            <header className="HomeHeader">
                <HomeNavbar />
            </header>
        
        <main className="HomeMain">
            <HomeMain />
        </main>

        <footer className="HomeFooter">
            <HomeFooter />
        </footer>
        </div>
    );
  }

export default Home;
