import { Typography } from "@material-tailwind/react";
import React from "react";
import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
const CardProductoPersonalizado = () => {
  return (
    <Container fluid className="bg-neutral-100">
      <Carousel
        
        indicators={false}
        controls={false}
        className="bg-neutral-100"
      >
        <CarouselItem>
          <section className="relative isolate overflow-hidden bg-neutral-100 px-6 py-24 sm:py-32 lg:px-8 text-center">
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-neutral-100 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
            <Row>
              <Col sm={12} md={6} data-aos="fade-right">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                  <img
                    className="mx-auto h-12 img-fluid w-44"
                    src="logo-footer.png"
                    alt=""
                  />
                  <Typography variant="h4">
                    Nuestros pedidos personalizados
                  </Typography>
                  <figure className="">
                    <Typography variant="p">Descripcion del pedido</Typography>
                  </figure>
                </div>
              </Col>
              <Col sm={12} md={6} data-aos="fade-left">
                <figcaption className="mt-10">
                  <img
                    className="mx-auto  rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
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
