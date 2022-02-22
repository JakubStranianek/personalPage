import './App.css';
import Home from "../src/components/Home/Home"
import About from "../src/components/About/About"

function App() {
  return (
    <div className="App">
        <Home id="home" />
        <About id="about" />
    </div>
  );
}

export default App;
