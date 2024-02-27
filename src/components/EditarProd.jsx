import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { Form, InputGroup } from "react-bootstrap";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Formik } from "formik";
import { Button } from "@material-tailwind/react";

const EditarProd = ({ prod }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm p-2 rounded-full text-center me-2 mb-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </button>

      <Modal size={"lg"} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              nombre: prod.nombre,
              precio: prod.precio,
              desc: prod.descripcion,
              cat: prod.categoria,
              medidas: prod.medidas,
              materiales: prod.materiales,
            }}
            // validationSchema={errorProdSchema}
            onSubmit={(values) => console.log(values)}
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
                        placeholder="Ej: Tabla 20x20"
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
                    Precio
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="groupPrice">
                        <i className="bi bi-currency-dollar"></i>
                      </InputGroup.Text>
                      <Form.Control
                        name="precio"
                        type="number"
                        aria-describedby="groupPrice"
                        placeholder="999"
                        onChange={handleChange}
                        value={values.precio}
                        className={
                          errors.precio && touched.precio && "is-invalid"
                        }
                      />
                    </InputGroup>
                    <small className="text-danger">
                      {errors.precio && touched.precio && errors.precio}
                    </small>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Categoría
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="groupCat">
                        <i className="bi bi-tag"></i>
                      </InputGroup.Text>
                      <Form.Select
                        name="cat"
                        onChange={handleChange}
                        value={values.cat}
                        className={errors.cat && touched.cat && "is-invalid"}
                      >
                        <option value="Cuadros">Cuadros</option>
                        <option value="Tablas">Tablas</option>
                        <option value="Mates">Mates</option>
                      </Form.Select>
                    </InputGroup>
                    <small className="text-danger">
                      {errors.cat && touched.cat && errors.cat}
                    </small>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Descripción
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="groupDesc">
                        <i className="bi bi-file-text"></i>
                      </InputGroup.Text>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        placeholder="Pequeña descripción sobre el producto"
                        name="desc"
                        onChange={handleChange}
                        value={values.desc}
                        className={errors.desc && touched.desc && "is-invalid"}
                      />
                    </InputGroup>
                    <small className="text-danger">
                      {errors.desc && touched.desc && errors.desc}
                    </small>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Características
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <Form.Group className="mb-3" controlId="medidasId">
                      <Form.Label>Medidas</Form.Label>
                      <InputGroup>
                        <InputGroup.Text id="groupMedidas">
                          <i className="bi bi-arrows-angle-expand"></i>
                        </InputGroup.Text>
                        <Form.Control
                          placeholder="Ej: 20cm x 20cm"
                          onChange={handleChange}
                          name="medidas"
                          value={values.medidas}
                          className={
                            errors.medidas && touched.medidas && "is-invalid"
                          }
                        />
                      </InputGroup>
                      <small className="text-danger">
                        {errors.medidas && touched.medidas && errors.medidas}
                      </small>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="materialesId">
                      <Form.Label>Materiales</Form.Label>
                      <InputGroup>
                        <InputGroup.Text id="groupMateriales">
                          <i className="bi bi-hammer"></i>
                        </InputGroup.Text>
                        <Form.Control
                          placeholder="Ej: Madera"
                          onChange={handleChange}
                          name="materiales"
                          value={values.materiales}
                          className={
                            errors.materiales &&
                            touched.materiales &&
                            "is-invalid"
                          }
                        />
                      </InputGroup>
                      <small className="text-danger">
                        {errors.materiales &&
                          touched.materiales &&
                          errors.materiales}
                      </small>
                    </Form.Group>
                  </dd>
                </div>
                <div className="text-end">
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    className="mt-3 rounded-full"
                  >
                    Guardar cambios
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

export default EditarProd;
