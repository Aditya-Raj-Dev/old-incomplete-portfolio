import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Services/>
     <Skills/>
    </div>
  );
}

export default App;
