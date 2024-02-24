import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { Formik } from "formik";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useCountries } from "use-react-countries";

const ContactPage = () => {
  const { countries } = useCountries();

  const countriesToShow = [
    "Argentina",
    "Brazil",
    "Chile",
    "Spain",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Ecuador",
    "Peru",
    "Colombia",
    "Mexico",
    "Uruguay",
  ];

  const filteredCountries = countries.filter((country) =>
    countriesToShow.includes(country.name)
  );

  const argentinaIndex = filteredCountries.findIndex(
    (country) => country.name === "Argentina"
  );

  const [country, setCountry] = useState(
    argentinaIndex !== -1 ? argentinaIndex : 0
  );

  const { name, flags, countryCallingCode } = filteredCountries[country];
  return (
    <Container className="w-full">
      <div className="flex justify-around w-full">
        <div className="w-full ms-5">
          <figcaption className="font-medium mt-24 ">
            <div className="dark:text-slate-300 fs-3">
              Tu consulta no molesta
            </div>
            <p className="text-slate-700 dark:text-slate-500">
              Rellena el formulario, y próximamente uno de nosotros se pondrá en
              contacto. También puedes escribirnos a través de nuestro correo
              electrónico
            </p>
          </figcaption>
          {/* <div className="d-flex justify-center mt-4" data-aos="fade-right">
              <a
                href="mailto:jbddevs@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="w-75 bg-gray-800 rounded p-2 no-underline text-white border hover:bg-gray-700 transition"
              >
                <div className="rounded-3">
                  <div className="text-center">
                    <Row className="flex-column">
                      <Col>
                        <i className="bi bi-envelope fs-2"></i>{" "}
                      </Col>
                      <Col>
                        <div className="fs-6 ">jbddevs@gmail.com</div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </a>
            </div> */}
        </div>
        <div className="w-full">
          <Formik
            initialValues={{
              email: "",
              nombre: "",
              tel: "",
              msg: "",
            }}
            onSubmit={(values) => sendComment(values)}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form className="max-w-md mx-auto mt-24" data-aos="fade-left">
                <div className="relative z-0 w-full mb-4 group input-container">
                  <input
                    data-aos="fade-left"
                    type="email"
                    name="email"
                    id="floating_email"
                    value={values.email}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-neutral-50 focus:outline-none focus:ring-0 focus:border-neutral-50 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:dark:text-neutral-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Correo electrónico
                  </label>
                  {/* <small className="text-danger">
                      {errors.email && touched.email && errors.email}
                    </small> */}
                </div>
                <div className="relative z-0 w-full mb-4 group">
                  <input
                    data-aos="fade-left"
                    type="text"
                    name="nombre"
                    id="floating_name"
                    onChange={handleChange}
                    value={values.nombre}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-neutral-50 focus:outline-none focus:ring-0 focus:border-neutral-50 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:dark:text-neutral-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Nombre y apellido
                  </label>
                  {/* <small className="text-danger">
                      {errors.nombre && touched.nombre && errors.nombre}
                    </small> */}
                </div>
                <div className="relative z-0 w-full mb-4 group flex">
                  <Menu placement="bottom-start">
                    <MenuHandler>
                      <Button
                        ripple={false}
                        variant="text"
                        color="blue-gray"
                        className="relative items-center -ms-6  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6  top-7 -z-10 origin-[0] d-flex"
                      >
                        <img
                          src={flags.svg}
                          alt={name}
                          className="h-4 w-4 rounded-full object-cover"
                        />
                        {countryCallingCode}
                      </Button>
                    </MenuHandler>
                    <MenuList className="max-h-[20rem] max-w-[18rem] border-0 bg-neutral-950 text-gray-500">
                      {filteredCountries.map(
                        ({ name, flags, countryCallingCode }, index) => (
                          <MenuItem
                            key={name}
                            value={name}
                            className="flex items-center gap-2"
                            onClick={() => setCountry(index)}
                          >
                            <img
                              src={flags.svg}
                              alt={name}
                              className="h-5 w-5 rounded-full object-cover"
                            />
                            {name}
                            <span className="ml-auto">
                              {countryCallingCode}
                            </span>
                          </MenuItem>
                        )
                      )}
                    </MenuList>
                  </Menu>
                  <input
                    data-aos="fade-left"
                    type="text"
                    name="tel"
                    id="floating_tel"
                    onChange={handleChange}
                    value={values.tel}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-neutral-50 focus:outline-none focus:ring-0 focus:border-neutral-50 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_tel"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:dark:text-neutral-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 d-flex justify-content-end"
                  >
                    <div className="ms-16">Número de teléfono (Opcional)</div>
                  </label>
                </div>
                {/* <small className="text-danger">
                    {errors.tel && touched.tel && errors.tel}
                  </small> */}
                <div className="relative z-0 w-full mb-4 mt-4 group">
                  <textarea
                    data-aos="fade-left"
                    rows={4}
                    name="msg"
                    id="floating_textarea"
                    onChange={handleChange}
                    value={values.msg}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-neutral-50 focus:outline-none focus:ring-0 focus:border-neutral-50 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_textarea"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:dark:text-neutral-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Mensaje
                  </label>
                  {/* <small className="text-danger">
                      {errors.msg && touched.msg && errors.msg}
                    </small> */}
                </div>
                <div className="text-end">
                  <button
                    data-aos="fade-left"
                    type="submit"
                    onClick={handleSubmit}
                    className="text-white bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
