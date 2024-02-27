import React from "react";
import { Container, Spinner } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Progress } from "@material-tailwind/react";
const PantallaDeCarga = () => {
  return (
    <Container
      fluid
      className="text-center d-flex justify-content-center align-items-center vh-100 color-nav-footer pantalla-carga"
    >
      <div className="loaders d-flex justify-center fuenteDeco font-bold ">
        <span>D</span>
        <span>e</span>
        <span>c</span>
        <span>o</span>
      </div>
      <div className="loaders d-flex justify-center fuenteDeco font-bold mt-24">
        <span></span>
        <span>M</span>
        <span>o</span>
        <span>t</span>
        <span>i</span>
        <span>v</span>
        <span>o</span>
      </div>
      {/* <div className="mt-56">
        <Spinner animation="border text-white" />
      </div> */}

      <div className="line-box mt-32">
        {/* <div className="line"></div> */}
        <Progress
          size="lg"
          className="border line border-gray-900/10 bg-gray-900/5 p-1"
        />
      </div>
    </Container>
    // <Container
    //   fluid
    //   className="text-center d-flex justify-content-center align-items-center vh-100 bg-neutral-950"
    // >
    //   <div>
    //     <Image
    //       src="/11-removebg-preview.png"
    //       fluid
    //       className="breathing-image mt-5"
    //     />
    //     <Spinner animation="border" />
    //   </div>
    // </Container>
  );
};

export default PantallaDeCarga;
