import { Button } from "@material-tailwind/react";
import React from "react";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";

const EditarFecha = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button onClick={handleShow}>Editar</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar fecha</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mt-2">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Feria
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="groupFeria">
                      <i className="bi bi-shop-window"></i>
                    </InputGroup.Text>
                    <Form.Control aria-describedby="groupFeria" />
                  </InputGroup>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Ubicación
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="groupUbi">
                      <i className="bi bi-geo-alt"></i>
                    </InputGroup.Text>
                    <Form.Control aria-describedby="groupUbi" />
                  </InputGroup>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Fecha
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="groupFecha">
                      <i className="bi bi-calendar-date"></i>
                    </InputGroup.Text>
                    <Form.Control aria-describedby="groupFecha" />
                  </InputGroup>
                </dd>
              </div>
            </dl>
          </div>
          <div className="text-end">
            <Button onClick={handleClose}>Guardar cambios</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditarFecha;
