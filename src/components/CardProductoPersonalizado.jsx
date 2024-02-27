import { Typography } from "@material-tailwind/react";
import React from "react";
import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
const CardProductoPersonalizado = () => {
  return (
    <Container fluid className="bg-neutral-100">
      <Typography variant="h2">Pedidos personalizados</Typography>

      <Carousel indicators={false} controls={false} className="bg-neutral-100">
        <CarouselItem>
          <section className="relative isolate overflow-hidden bg-neutral-100 px-6 py-24 sm:py-32 lg:px-8 text-center">
            <div className="absolute inset-y-0 right-1/2 -z-10  w-[200%] origin-bottom-left skew-x-[-30deg] bg-neutral-100 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50   xl:origin-center"></div>
            <Row>
              <Col sm={12} md={6} data-aos="fade-right">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                  <img
                    className="mx-auto h-12 img-fluid w-44"
                    src="logo-footer.png"
                    alt=""
                  />
                  <Typography variant="h4">
                    Tabla grabado láser Argentina
                  </Typography>
                  <figure className="">
                    <Typography>
                      Un cliente nos solicitó una tabla de madera con diseño de
                      nuestro país para el mundial de Qatar 2022. ¡El cliente
                      quedó muy satisfecho con el resultado!
                    </Typography>
                  </figure>
                </div>
              </Col>
              <Col sm={12} md={6} data-aos="fade-left">
                <figcaption className="mt-10">
                  <img
                    className="mx-auto  rounded-full"
                    src="https://http2.mlstatic.com/D_NQ_NP_740973-MLA51871385764_102022-O.webp"
                    alt="Tabla"
                  />
                </figcaption>
              </Col>
            </Row>
          </section>
        </CarouselItem>
      </Carousel>
    </Container>
  );
};

export default CardProductoPersonalizado;
