import axios from "axios";

const API_BASE_URL = "https://localhost:7000/api"; // 👈 matches your C# backend

const pharmacyApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Example endpoints
export const getProducts = () => pharmacyApi.get("/products");
export const getOrders = () => pharmacyApi.get("/orders");
export const createOrder = (data: any) => pharmacyApi.post("/orders", data);

export default pharmacyApi;
