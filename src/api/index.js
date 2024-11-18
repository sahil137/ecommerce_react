import axios from "axios";
import { auth } from "../firebase";

// Create Axios instance
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8000", // Base URL
  timeout: 10000, // Request timeout in ms
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor: Dynamically add the Firebase token to headers
axiosClient.interceptors.request.use(
  async (config) => {
    const user = auth.currentUser;
    if (user) {
      try {
        const token = await user.getIdToken(); // Fetch the token
        config.headers.Authorization = `Bearer ${token}`; // Attach token to Authorization header
      } catch (error) {
        console.error("Error fetching Firebase token:", error);
        throw error;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle global errors (e.g., redirect to login on 401)
    if (error.response?.status === 401) {
      // Log out the user or redirect to login
      console.error("Unauthorized, logging out...");
    }
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || "Something went wrong";
    return Promise.reject(new Error(message));
  }
);

export default axiosClient;
