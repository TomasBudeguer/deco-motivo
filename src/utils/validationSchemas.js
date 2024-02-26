import * as yup from "yup";

export const errorProdSchema = yup.object().shape({
  nombre: yup.string().required("Campo nombre del producto obligatorio"),
  precio: yup.number().required("Campo precio del producto obligatorio"),
  desc: yup.string().required("Campo descripción del producto obligatorio"),
  img: yup.string().required("Campo imagen del producto obligatorio"),
  cat: yup.string().required("Campo categoría obligatorio"),
  medidas: yup.string().required("Campo medidas del producto obligatorio"),
  materiales: yup
    .string()
    .required("Campo materiales del producto obligatorio"),
});
export const errorAdminSchema = yup.object().shape({
  nombre: yup.string().required("Campo nombre del usuario obligatorio"),
  email: yup.string().required("Campo correo electrónico obligatorio"),
  pass: yup.string().required("Campo contraseña obligatorio"),
});
export const errorLoginAdmin = yup.object().shape({
  email: yup
    .string()
    .required("El campo correo electrónico es obligatorio")
    .email("El formato debe ser: example@email.com"),
  pass: yup.string().required("El campo contraseña es obligatorio"),
});
