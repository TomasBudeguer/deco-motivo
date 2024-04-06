import axios from "axios";

const clientAxios = axios.create({
  baseURL: import.meta.env.VITE_BACK_URL_LOCAL,
});

export const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export default clientAxios;
