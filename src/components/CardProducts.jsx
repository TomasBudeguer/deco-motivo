import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducts = ({ prod }) => {
  return (
    <Col sm={12} md={4} lg={3} className="my-5">
      <div className="containers ">
        <div className="cardss">
          <div className="image">
            <img
              src={prod?.imgs[0]}
              alt="Auto Retro"
            />
          </div>
          <div className="content">
            <h2>{prod.nombre}</h2>
            <p className="cortarText">
            {prod.descripcion}
            </p>
            <Link to={`/product/${prod._id}`}>Ver mas</Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CardProducts;
