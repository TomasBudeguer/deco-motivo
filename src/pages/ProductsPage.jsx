import React, { useEffect, useState } from "react";

import { Container, Row, Tab, Tabs } from "react-bootstrap";

import CardProducts from "../components/CardProducts";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  
  const getProducts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACK_URL_LOCAL}`);
      const res = await response.json()
      setProducts(res.allProds)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <Container fluid>
     
      <Row className="my-5">
            {products.map((prod) => (
              <CardProducts key={prod._id} prod={prod}/>
            ))}
          </Row>
    </Container>
  );
};

export default ProductsPage;
