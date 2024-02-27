import {
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const IntroduccionComp = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 bg-neutral-100">
    
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div
          className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          data-aos="zoom-in"
        >
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                ¿Qué es Deco Motivo?
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              En Deco Motivo nos apasiona convertir espacios en obras de arte, ofreciendo una amplia gama de productos artesanales diseñados para elevar la estética de cualquier ambiente. Desde cuadros vibrantes hasta mates únicos y tablas de madera exquisitamente grabadas, nuestra colección fusiona la creatividad con la artesanía para brindarte piezas que no solo adornan, sino que también inspiran.
              </p>
            </div>
          </div>
        </div>
        <div
          className="-ml-12 -mt-12 p-12 mx-auto lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          data-aos="zoom-in-left"
        >
          <img
            className=" rounded-xl color-nav-footer shadow-xl ring-1 ring-gray-400/10 "
            src="logo-footer.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default IntroduccionComp;
