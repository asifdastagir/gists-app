import axios from "axios";

// we need to pass the baseURL as an object
const API = axios.create({
  baseURL: "https://api.github.com/",
});

export default API;
