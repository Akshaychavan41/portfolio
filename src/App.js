import "./App.css";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Projects from "./Components/Projects/Projects.js";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
