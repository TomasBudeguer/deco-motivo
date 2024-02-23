import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const FooterComp = () => {
  return (
    <Container fluid className="color-nav-footer py-2 ">
      <Row className=" text-neutral-100 align-items-center ">
        <Col sm={6} className="flex justify-center my-3">
          <Link to={"/"}>
            <img src="/logo.png" alt="logo" className="w-48" />
          </Link>
        </Col>
        <Col sm={6} className="flex justify-center my-3 align-items-baseline">
          <h3>Encontranos en</h3>
          <a
            href="https://www.linkedin.com/in/jbd-devs-87426a2b4/"
            className="linkedIn"
            target="_blank"
          >
            <i className="bi bi-linkedin fs-3 mx-3 "></i>
          </a>
        </Col>
      </Row>
      <hr className="text-neutral-100" />
      <p className="text-center text-neutral-100">
        © 2024 Deco Motivo. All rights reserved.
      </p>
    </Container>
  );
};

export default FooterComp;
