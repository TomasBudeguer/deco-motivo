import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TablaUsuarios from "../components/TablaUsuarios";
import TablaProductos from "../components/TablaProductos";
import EditarProd from "../components/EditarProd";
import FechasComp from "../components/FechasComp";
import clientAxios from "../utils/axiosClient";

const AdminPage = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));

  const [admins, setAdmins] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await clientAxios.get("/products");
      setProducts(res.data.allProds)
    } catch (error) {
      console.log(error);
    }
  };

  const getAdminUsers = async () => {
    try {
      const response = await fetch("http://localhost:4444/admins", {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await response.json();
      setAdmins(res.allAdmins);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdminUsers(), getProducts()
  }, []);
  return (
    <Container>
      <Tabs
        defaultActiveKey="productos"
        id="fill-tab-example"
        className="mb-3 "
        fill
      >
        <Tab
          eventKey="productos"
          title={
            <span style={{ color: "black" }} className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 me-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              Productos
            </span>
          }
        >
          <TablaProductos products={products}/>
        </Tab>
        <Tab
          eventKey="admin"
          title={
            <span style={{ color: "black" }}>
              <i className="bi bi-person-fill-gear"></i> Administradores
            </span>
          }
        >
          <TablaUsuarios admins={admins} />
        </Tab>
        <Tab
          eventKey="longer-tab"
          title={
            <span style={{ color: "black" }} className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 me-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
              Fechas
            </span>
          }
        >
          <FechasComp />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default AdminPage;
