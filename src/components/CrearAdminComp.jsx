import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, InputGroup } from "react-bootstrap";
import { Button } from "@material-tailwind/react";
import { Formik } from "formik";
import { errorAdminSchema } from "../utils/validationSchemas";
import { Bounce, ToastContainer, toast } from "react-toastify";

const CrearAdminComp = ({ getAdminUsers }) => {
  const [show, setShow] = useState(false);
  const token = JSON.parse(sessionStorage.getItem("token"));
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createAdmin = async ({ name, email, pass }) => {
    try {
      const response = await fetch(
        `https://deco-motivo-back.vercel.app/admins`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name,
            email,
            pass,
          }),
        }
      );
      const res = await response.json();
      if (res.status === 201) {
        toast.success(res.msg, {
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
        getAdminUsers();
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
      <Button className="bg-neutral-900" onClick={handleShow}>
        Crear usuario administrador
      </Button>

      <Modal size={"lg"} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear nuevo administrador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              name: "",
              email: "",
              pass: "",
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
                      <i class="bi bi-person"></i>
                      </InputGroup.Text>
                      <Form.Control
                        name="name"
                        aria-describedby="groupName"
                        placeholder="Ej: Juan Hernández"
                        value={values.name}
                        onChange={handleChange}
                        className={errors.name && touched.name && "is-invalid"}
                      />
                    </InputGroup>
                    <small className="text-danger">
                      {errors.name && touched.name && errors.name}
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
                        className={errors.pass && touched.pass && "is-invalid"}
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
                    className="mt-3 rounded-full bg-neutral-900"
                  >
                    Crear usuario
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
