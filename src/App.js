import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Portada from "./components/portada/Portada";
import Skills from "./components/skills/Skills";
import SobreMi from "./components/sobremi/SobreMi";
import Trabajos from "./components/trabajos/Trabajos";
import Contacto from "./components/contact/Contacto";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Portada />
        <Skills />
        <SobreMi />
        <Trabajos />
        <Contacto />
      </Router>
    </>
  );
}

export default App;
