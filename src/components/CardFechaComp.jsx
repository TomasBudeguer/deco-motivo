import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import EditarFecha from "./EditarFecha";

const CardFechaComp = () => {
  return (
    <div className="flex justify-center">
      <Card
        variant="gradient"
        className="w-full max-w-[20rem] p-8 bg-gray-800 text-slate-50"
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
            <span className="mt-2 text-4xl">Nombre de la feria</span>
          </Typography>
        </CardHeader>
        <CardBody className="mt-3">
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4 my-2">
              <span className="rounded-full ">
                <i className="bi bi-geo-alt"></i>
              </span>
              <Typography className="font-normal">Ubicación</Typography>
            </li>
            <li className="flex gap-4 my-2">
              <span className="rounded-full ">
                <i className="bi bi-calendar-date"></i>
              </span>
              <Typography className="font-normal">Fecha</Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="flex justify-between">
          <EditarFecha />
          <Button>Borrar</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardFechaComp;
