import * as yup from 'yup'

export const errorProdSchema = yup.object().shape({
    nombre: yup.string().required('Campo nombre del producto obligatorio'),
    precio: yup.number().required("Campo precio del producto obligatorio"),
    desc: yup.string().required("Campo descripción del producto obligatorio"),
    img: yup.string().required("Campo imagen del producto obligatorio"),
    cat: yup.string().required("Campo categoría obligatorio"),
    medidas: yup.string().required("Campo medidas del producto obligatorio"),
    materiales: yup.string().required("Campo materiales del producto obligatorio"),
})