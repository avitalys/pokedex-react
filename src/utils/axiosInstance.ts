import axios from "axios";

const baseURL = "https://graphql-pokemon2.vercel.app/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
