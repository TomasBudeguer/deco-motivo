import React, { useEffect, useState } from "react";

import { Container, Row, Tab, Tabs } from "react-bootstrap";

import CardProducts from "../components/CardProducts";
// const products = [
//   {
//     id: 1,
//     name: "Producto 1",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Producto 1 in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 2,
//     name: "Producto 2",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Producto 2 in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 3,
//     name: "Producto 3",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Producto 3 in black.",
//     price: "$35",
//     color: "Black",
//   },
// ];

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:4444/products");
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
      <Tabs
        defaultActiveKey="Todos"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab
          eventKey="Todos"
          title={
            <span style={{ color: "black" }} className="flex justify-center">
              Todos
            </span>
          }
        >
          <Row className="my-5">
            {products.map((prod) => (
              <CardProducts key={prod._id} prod={prod}/>
            ))}
          </Row>
        </Tab>
        <Tab
          eventKey="profile"
          title={
            <span style={{ color: "black" }} className="flex justify-center">
              Categoria
            </span>
          }
        >
          {/* <Row className="my-5">
            {products.map((prod) => (
              <CardProducts key={prod.id} prod={prod}></CardProducts>
            ))}
            <CardProducts></CardProducts>
          </Row> */}
        </Tab>
        <Tab
          eventKey="longer-tab"
          title={
            <span style={{ color: "black" }} className="flex justify-center">
              Categoria
            </span>
          }
        >
          {/* <Row className="my-5">
            {products.map((prod) => (
              <CardProducts key={prod.id} prod={prod}></CardProducts>
            ))}
            <CardProducts></CardProducts>
          </Row> */}
        </Tab>
      </Tabs>
    </Container>
  );
};

export default ProductsPage;
