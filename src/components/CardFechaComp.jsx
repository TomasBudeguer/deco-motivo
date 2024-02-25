import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Container } from "react-bootstrap";
import EditarFecha from "./EditarFecha";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}
const CardFechaComp = () => {
  return (
    <div className="flex justify-center">
      <Card
        color="gray"
        variant="gradient"
        className="w-full max-w-[20rem] p-8"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">Nombre de la feria</span>{" "}
          </Typography>
        </CardHeader>
        <CardBody className="">
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4 my-2">
              <span className="rounded-full ">
                <i class="bi bi-geo-alt"></i>
              </span>
              <Typography className="font-normal">Ubicacion</Typography>
            </li>
            <li className="flex gap-4 my-2">
              <span className="rounded-full ">
                <i class="bi bi-calendar-date"></i>
              </span>
              <Typography className="font-normal">Ubicacion</Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="flex justify-between">
        <EditarFecha/>
          <Button size="md" >
            Borrar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardFechaComp;
