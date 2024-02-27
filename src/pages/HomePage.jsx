import React from "react";
import { Container, Row } from "react-bootstrap";
import IntroduccionComp from "../components/IntroduccionComp";
import { ColeccionComp } from "../components/ColeccionComp";

import CardProductoPersonalizado from "../components/CardProductoPersonalizado";
import { Typography } from "@material-tailwind/react";
import BubblesComp from "../components/BubblesComp";
const callouts = [
  {
    name: "Producto 1",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Producto 2",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Producto 3",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
const HomePage = () => {
  return (
    <>
        <BubblesComp/>
      <Container fluid>
        <IntroduccionComp />
        <ColeccionComp />
        <CardProductoPersonalizado />
      </Container>
    </>
  );
};

export default HomePage;
