import "../components/Home.css"
import HomeNavbar from "../components/Navbar"
import HomeMain from "../components/HomeMain"
import HomeFooter from "../components/HomeFooter"
import ParticleBackground from "../components/particleBackground";

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
