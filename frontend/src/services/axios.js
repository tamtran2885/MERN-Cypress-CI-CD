import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "https://ecommerbackend.herokuapp.com",
});

export default instance;
