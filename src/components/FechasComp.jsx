import React from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import CardFechaComp from "./CardFechaComp";
import { Button } from "@material-tailwind/react";

const FechasComp = () => {
  return (
    <Row>
      <Col lg={6} className="my-4">
        <div className="mt-2">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Feria
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="groupName">
                    <i className="bi bi-shop-window"></i>
                  </InputGroup.Text>
                  <Form.Control aria-describedby="groupName" />
                </InputGroup>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Ubicación
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="groupName">
                    <i className="bi bi-geo-alt"></i>
                  </InputGroup.Text>
                  <Form.Control aria-describedby="groupName" />
                </InputGroup>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Fecha
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="groupPrice">
                    <i className="bi bi-calendar-date"></i>
                  </InputGroup.Text>
                  <Form.Control aria-describedby="groupPrice" />
                </InputGroup>
              </dd>
            </div>
          </dl>
        </div>
        <div className="text-end">
          <Button>Guardar Cambios</Button>
        </div>
      </Col>
      <Col lg={6} className="my-4">
        <CardFechaComp />
      </Col>
    </Row>
  );
};

export default FechasComp;
