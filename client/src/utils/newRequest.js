import axios from "axios";

// AXIOS INSTANCE
const newRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true,
});

export default newRequest;