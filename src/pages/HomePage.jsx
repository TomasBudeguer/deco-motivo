import React from "react";
import { Container } from "react-bootstrap";
import IntroduccionComp from "../components/IntroduccionComp";
import { ColeccionComp } from "../components/ColeccionComp";

const HomePage = () => {
  return (
    <>
    <Container fluid>
    <IntroduccionComp/>
    <ColeccionComp/>
    </Container>
    </>
  );
};

export default HomePage;
