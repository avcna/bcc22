import axios from "axios";

export const petlinkAPI = axios.create({
  baseURL: "https://web-service-petlink.onrender.com/",
});
