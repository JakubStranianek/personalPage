import './App.css';
import Home from "../src/components/Home/Home"
import About from "../src/components/About/About"
import Skills from "../src/components/Skills/Skills"
import PortfolioLogo from "../src/components/PortfolioLogo/PortfolioLogo"

function App() {
  return (
    <div className="App">
        <Home />
        <About />
        <Skills />
        <PortfolioLogo />
    </div>
  );
}

export default App;
