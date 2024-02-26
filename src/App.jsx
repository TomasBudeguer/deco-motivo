import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
import RoutesViews from "./routes/RoutesViews";
import PantallaDeCarga from "./components/PantallaDeCarga";

const App = () => {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCargando(false);
    }, 3000);
    Aos.init({ duration: 1800, once: true });
  }, []);

  return (
    <>
      <Router>
        {cargando ? (
          <PantallaDeCarga />
        ) : (
          <div className="App">
            <NavbarComp />
            <main className="mainSection bg-neutral-100">
              <RoutesViews />
            </main>
            <div className=" bg-neutral-100">
              <FooterComp />
            </div>
          </div>
        )}
      </Router>
    </>
  );
};

export default App;
