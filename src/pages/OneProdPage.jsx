import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OneProdPage = () => {
  const params = useParams();
  const [prod, setProd] = useState({});

  const getOneProduct = async () => {
    const response = await fetch(`http://localhost:4444/products/${params.id}`);
    const res = await response.json();
    setProd(res.oneProd);
  };

  useEffect(() => {
    getOneProduct();
  }, []);
  const handleWhatsapp = () => {
    const message = `Hola, tengo dudas acerca de este producto: ${prod.nombre}`;
    const url = `https://wa.me/${3815984158}?text=${encodeURIComponent(
      message
    )}`;
    open(url, "_blank");
  };
  return (
    <div className="bg-neutral-100">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div data-aos="zoom-out">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {prod.nombre}
          </h2>
          <div className="flex justify-between">
            <p className="mt-4 text-gray-500">{prod.descripcion} </p>
            <p className="mt-4 text-gray-500">${prod.precio} </p>
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Materiales</dt>
              <dd className="mt-2 text-sm text-gray-500">{prod.materiales}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Medidas</dt>
              <dd className="mt-2 text-sm text-gray-500">{prod.medidas}</dd>
            </div>
          </dl>
        </div>
        <div
          data-aos="zoom-out-left"
          className="grid grid-cols-2  gap-4 sm:gap-6 lg:gap-8"
        >
          {prod?.imgs?.map((img, index) => (
            <img
              src={img}
              alt={img}
              key={index}
              className="rounded-lg bg-gray-100 w-96"
            />
          ))}
        </div>
        <div data-aos="fade-up" className="text-center ">
          <Button className="color-nav-footer" onClick={handleWhatsapp}>
            <i className="bi bi-whatsapp"></i> Consultar stock
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OneProdPage;
