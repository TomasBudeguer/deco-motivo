import axios from "axios";

const clientAxios = axios.create({
  baseURL: "https://deco-motivo-back.vercel.app",
});

export const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export default clientAxios;
