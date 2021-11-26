import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Portada from "./components/portada/Portada";
import Skills from "./components/skills/Skills";
import Trabajos from "./components/trabajos/Trabajos";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Portada />
        <Skills />
        <Trabajos />
      </Router>
    </>
  );
}

export default App;
