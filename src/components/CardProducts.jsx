import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducts = () => {
  return (
    <Col sm={12} md={4} lg={3} className="my-5">
      <div className="containers ">
        <div className="cardss">
          <div className="image">
            <img
              src="https://media.es.wired.com/photos/6501e7429fa9000811a95fe8/16:9/w_2240,c_limit/Adobe%20Firefly.jpeg"
              alt="Auto Retro"
            />
          </div>
          <div className="content">
            <h2>Producto 1</h2>
            <p className="cortarText">
              Lorem ipsum dolor sit amet, consectetur cing elit. Sed vitae purus
              quis justo finibus congue. Nulla facilisi. Vestibulum eget libero
              consectetur, gravida purus non, vestibulum justo.
            </p>
            <Link to={"/product"}>Ver mas</Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CardProducts;
