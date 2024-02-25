import React from "react";
import { Container } from "react-bootstrap";
import IntroduccionComp from "../components/IntroduccionComp";
import { ColeccionComp } from "../components/ColeccionComp";

import CardProductoPersonalizado from "../components/CardProductoPersonalizado";

const HomePage = () => {
  return (
    <>
      <Container fluid>
        <IntroduccionComp />
        <ColeccionComp />
        <CardProductoPersonalizado />
      </Container>
    </>
  );
};

export default HomePage;
