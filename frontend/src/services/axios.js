import axios from "axios";

const instance = axios.create({
  baseUrl: "",
  // baseURL: "http://localhost:5000",
  // baseURL: "https://ecommerbackend.herokuapp.com",
});

export default instance;
