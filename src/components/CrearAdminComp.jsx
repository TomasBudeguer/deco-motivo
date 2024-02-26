import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, InputGroup } from "react-bootstrap";
import { Button } from "@material-tailwind/react";
import { Formik } from "formik";
import { errorAdminSchema } from "../utils/validationSchemas";

const CrearAdminComp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createAdmin = (values) => console.log(values);

  return (
    <>
      <Button onClick={handleShow}>Crear usuario administrador</Button>

      <Modal size={"lg"} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear nuevo administrador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
                nombre: "",
                email: "",
                pass: ""
            }}
            validationSchema={errorAdminSchema}
            onSubmit={(values) => createAdmin(values)}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <Form className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Nombre
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="groupName">
                        <i className="bi bi-upc-scan"></i>
                      </InputGroup.Text>
                      <Form.Control
                        name="nombre"
                        aria-describedby="groupName"
                        placeholder="Ej: Juan Hernández"
                        value={values.nombre}
                        onChange={handleChange}
                        className={
                          errors.nombre && touched.nombre && "is-invalid"
                        }
                      />
                    </InputGroup>
                    <small className="text-danger">
                      {errors.nombre && touched.nombre && errors.nombre}
                    </small>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Correo electrónico
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="groupEmail">
                      <i className="bi bi-envelope-at-fill"></i>
                      </InputGroup.Text>
                      <Form.Control
                        name="email"
                        type="email"
                        aria-describedby="groupEmail"
                        placeholder="name@example.com"
                        onChange={handleChange}
                        value={values.email}
                        className={
                          errors.email && touched.email && "is-invalid"
                        }
                      />
                    </InputGroup>
                    <small className="text-danger">
                      {errors.email && touched.email && errors.email}
                    </small>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Contraseña
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="groupPass">
                      <i className="bi bi-key-fill"></i>
                      </InputGroup.Text>
                      <Form.Control
                        name="pass"
                        type="password"
                        aria-describedby="groupPass"
                        placeholder="***************"
                        onChange={handleChange}
                        value={values.pass}
                        className={
                          errors.pass && touched.pass && "is-invalid"
                        }
                      />
                    </InputGroup>
                    <small className="text-danger">
                      {errors.pass && touched.pass && errors.pass}
                    </small>
                  </dd>
                </div>

                <div className="text-end">
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    className="mt-3 rounded-full"
                  >
                    Crear producto
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CrearAdminComp;
