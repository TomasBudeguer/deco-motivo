import axios from "axios";

const clientAxios = axios.create({
  baseURL: "http://localhost:4444"
});

export const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export default clientAxios;
