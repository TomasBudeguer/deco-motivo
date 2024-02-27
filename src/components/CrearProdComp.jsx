import React from "react";
import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { Form, InputGroup } from "react-bootstrap";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Formik } from "formik";
import { errorProdSchema } from "../utils/validationSchemas";
import { Button } from "@material-tailwind/react";
import clientAxios from "../utils/axiosClient";

const CrearProdComp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createProduct = async (values) => {
    try {
      const res = await clientAxios.post("/products")
    } catch (error) {
      
    }
  }

  return (
    <>
      <Button variant="filled" className="rounded-lg" onClick={handleShow}>
        Crear producto
      </Button>

      <Modal size={"lg"} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear nuevo producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              nombre: "",
              precio: "",
              desc: "",
              img: "",
              cat: "",
              medidas: "",
              materiales: "",
            }}
            validationSchema={errorProdSchema}
            onSubmit={(values) => createProduct(values)}
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
                        <option value="">Categoría no seleccionada</option>
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
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Imágen
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <Form.Control
                      type="file"
                      multiple
                      value={values.img}
                      onChange={handleChange}
                      name="img"
                      className={errors.img && touched.img && "is-invalid"}
                    />
                    <small className="text-danger">
                      {errors.img && touched.img && errors.img}
                    </small>
                  </dd>
                  <div className="sm:col-start-2 sm:col-span-1 flex justify-center">
                    {/* Acá va a ir la Previsualización de la imagen :D */}
                    {/* <img
                      src="/logo.png"
                      alt="Previsualización de imagen"
                      className="mt-3"
                    /> */}
                  </div>
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

export default CrearProdComp;
