import axios from "axios";

export const petlinkAPI = axios.create({
  baseURL: "https://web-service-petlink.onrender.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/json",
  },
});
