import axios from "axios";

const baseAxios = axios.create({
  baseURL: "http://localhost:4001",
});

export default baseAxios;
