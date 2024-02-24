import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
import { Carousel, CarouselItem, Container } from "react-bootstrap";
const CardProductoPersonalizado = () => {
  return (
    <Container fluid className=" bg-neutral-100">
      <Carousel
        data-aos="fade-right"
        indicators={false}
        className=" bg-neutral-100"
      >
        <CarouselItem>
          <Card  className="w-full max-w-[95rem] flex-row mx-auto mb-5">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="card-image"
                className="h-full w-full object-cover img-fluid"
              />
            </CardHeader>
            <CardBody className="w-full">
              <Typography
                variant="h6"
                color="gray"
                className="my-4 uppercase text-center"
              >
                Nuestros pedidos personalizados
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Nombre del producto
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                Descripcion del producto
              </Typography>
              <a href="#" className="inline-block">
                <Button variant="text" className="flex items-center gap-2">
                  Realizar un pedido personalizado
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardBody>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="w-full max-w-[95rem] flex-row mx-auto mb-5">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody className="w-full">
              <Typography
                variant="h6"
                color="gray"
                className="my-4 uppercase text-center"
              >
                Nuestros pedidos personalizados
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Nombre del producto
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                Descripcion del producto
              </Typography>
              <a href="#" className="inline-block">
                <Button variant="text" className="flex items-center gap-2">
                  Realizar un pedido personalizado
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardBody>
          </Card>
        </CarouselItem>
      </Carousel>
    </Container>
  );
};

export default CardProductoPersonalizado;
