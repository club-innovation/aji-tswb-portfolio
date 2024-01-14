import styles from './App.module.css';

//Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;