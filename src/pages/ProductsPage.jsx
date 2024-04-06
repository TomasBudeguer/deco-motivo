import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardProducts from "../components/CardProducts";
import clientAxios from "../utils/axiosClient";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  
  const getProducts = async () => {
    try {
      const res = await clientAxios.get("/products")
      setProducts(res.data.allProds)
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
