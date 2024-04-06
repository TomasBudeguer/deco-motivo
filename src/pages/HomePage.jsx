import React from "react";
import { Container, Row } from "react-bootstrap";
import IntroduccionComp from "../components/IntroduccionComp";
import { ColeccionComp } from "../components/ColeccionComp";
import CardProductoPersonalizado from "../components/CardProductoPersonalizado";
import BubblesComp from "../components/BubblesComp";

const HomePage = () => {
  return (
    <>
      <BubblesComp />
      <Container fluid>
        <IntroduccionComp />
        <ColeccionComp />
        <CardProductoPersonalizado />
      </Container>
    </>
  );
};

export default HomePage;
