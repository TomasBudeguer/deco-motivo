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
    <div class="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 bg-neutral-100">
    
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          data-aos="zoom-in"
        >
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                TITULO
              </h1>
              <p class="mt-6 text-xl leading-8 text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                veritatis fuga, pariatur nostrum beatae numquam esse quam ipsa
                soluta fugit voluptas reiciendis aliquam voluptatem, recusandae
                ipsam velit molestias, possimus maxime..
              </p>
            </div>
          </div>
        </div>
        <div
          class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          data-aos="zoom-in-left"
        >
          <img
            class="w-[48rem]  rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default IntroduccionComp;
