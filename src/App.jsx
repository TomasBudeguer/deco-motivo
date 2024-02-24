import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
import RoutesViews from "./routes/RoutesViews";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1800, once: true });
  }, []);
  return (
    <>
      <Router>
        <div className="App">
          <NavbarComp />
          <main className="mainSection bg-neutral-100">
            <RoutesViews />
          </main>
          <div className=" bg-neutral-100">

          <FooterComp />
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
