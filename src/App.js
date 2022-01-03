import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Portada from "./components/portada/Portada";
import SobreMi from "./components/sobremi/SobreMi";
import Trabajos from "./components/trabajos/Trabajos";
import Contacto from "./components/contact/Contacto";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Portada />
        <SobreMi />
        <Trabajos />
        <Contacto />
        <Footer />
      </Router>
    </>
  );
}

export default App;
