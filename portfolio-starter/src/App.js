import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Services/>
     <Skills/>
     <Portfolio/>
     <Contact/>
    </div>
  );
}

export default App;
