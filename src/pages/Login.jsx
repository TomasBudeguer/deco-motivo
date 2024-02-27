import { Formik } from "formik";
import React from "react";
import { errorLoginAdmin } from "../utils/validationSchemas";
import clientAxios, { config } from "../utils/axiosClient";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const ingresarCuenta = async ({ email, pass }) => {
    try {
      const res = await clientAxios.post(
        "/admins/login",
        {
          email,
          pass,
        },
        config
      );
      if(res.status === 200){
        sessionStorage.setItem("token", JSON.stringify(res?.data?.token))
        sessionStorage.setItem("idAdmin", JSON.stringify(res?.data?.userExist._id))

        navigate("/admin")
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto w-44"
          src="logo-footer.png"
          alt="Your Company"
        />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={{
            email: "",
            pass: "",
          }}
          onSubmit={(values) => ingresarCuenta(values)}
          validationSchema={errorLoginAdmin}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Correo electrónico
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <small className="text-danger">
                  {errors.email && touched.email && errors.email}
                </small>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contraseña
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-gray-800 hover:text-gray-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="pass"
                    type="password"
                    onChange={handleChange}
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <small className="text-danger">
                  {errors.pass && touched.pass && errors.pass}
                </small>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Ingresar
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
