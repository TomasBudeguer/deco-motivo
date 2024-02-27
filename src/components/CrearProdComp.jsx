import React from "react";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";

import { Form, InputGroup } from "react-bootstrap";
import { Bounce, ToastContainer, toast } from "react-toastify";

import { Formik } from "formik";
import { errorProdSchema } from "../utils/validationSchemas";
import { Button } from "@material-tailwind/react";

const CrearProdComp = ({ getProducts }) => {
  const token = JSON.parse(sessionStorage.getItem("token"));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createProduct = async ({
    nombre,
    precio,
    categoria,
    descripcion,
    medidas,
    imgs,
    materiales,
  }) => {
    try {
      const formData = new FormData();

      formData.append("nombre", nombre);
      formData.append("precio", precio);
      formData.append("categoria", categoria);
      formData.append("descripcion", descripcion);
      formData.append("medidas", medidas);
      formData.append("materiales", materiales);

      imgs.forEach((imagen) => {
        formData.append(`imgs`, imagen);
      });

      const res = await fetch(
        `${import.meta.env.VITE_BACK_URL_LOCAL}/products`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const response = await res.json();

      if (response.status === 201) {
        toast.success(response.msg, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        getProducts();
        handleClose();
      }
    } catch (error) {
      toast.error(error, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <Button
        variant="filled"
        className="rounded-lg bg-neutral-900"
        onClick={handleShow}
      >
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
              descripcion: "",
              imgs: [],
              categoria: "",
              medidas: "",
              materiales: "",
            }}
            validationSchema={errorProdSchema}
            onSubmit={(values) => createProduct(values)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              setFieldValue,
            }) => (
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
                        name="categoria"
                        onChange={handleChange}
                        value={values.categoria}
                        className={
                          errors.categoria && touched.categoria && "is-invalid"
                        }
                      >
                        <option value="">Categoria no seleccionada</option>
                        <option value="Cuadros">Cuadros</option>
                        <option value="Tablas">Tablas</option>
                        <option value="Mates">Mates</option>
                      </Form.Select>
                    </InputGroup>
                    <small className="text-danger">
                      {errors.categoria &&
                        touched.categoria &&
                        errors.categoria}
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
                        name="descripcion"
                        onChange={handleChange}
                        value={values.descripcion}
                        className={
                          errors.descripcion &&
                          touched.descripcion &&
                          "is-invalid"
                        }
                      />
                    </InputGroup>
                    <small className="text-danger">
                      {errors.descripcion &&
                        touched.descripcion &&
                        errors.descripcion}
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
                      name="imgs"
                      onChange={(event) => {
                        const filesArray = Array.from(
                          event.currentTarget.files
                        );
                        setFieldValue("imgs", filesArray);
                      }}
                      className={errors.imgs && touched.imgs && "is-invalid"}
                    />
                    <small className="text-danger">
                      {errors.imgs && touched.imgs && errors.imgs}
                    </small>
                  </dd>
                  <div className="sm:col-start-2 sm:col-span-1 flex justify-center"></div>
                </div>
                <div className="text-end">
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    className="mt-3 rounded-full bg-neutral-900"
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
