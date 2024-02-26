import React from "react";
import { Col } from "react-bootstrap";

export const ColeccionComp = ({
  name,
  imageAlt,
  imageSrc,
  description,
  href,
}) => {
  return (
    <>
      {name === "Producto 1" ? (
        <Col lg={4}>
          <div className="bg-gray-100" data-aos="fade-right">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl  py-3 lg:max-w-none ">
               

                <div key={name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={href}>
                      <span className="absolute inset-0" />
                      {name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      ) : name === "Producto 2" ? (
        <Col lg={4}>
          <div className="bg-gray-100" data-aos="zoom-in">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl  py-3 lg:max-w-none ">
               

                <div key={name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={href}>
                      <span className="absolute inset-0" />
                      {name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      ) : name === "Producto 3" ? (
        <Col lg={4}>
          <div className="bg-gray-100" data-aos="fade-left">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl  py-3 lg:max-w-none ">
               

                <div key={name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={href}>
                      <span className="absolute inset-0" />
                      {name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      ) : (
        ""
      )}
    </>
  );
};
