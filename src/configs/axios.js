import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token") || "";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InR1b2ludEByaWtrZWkuZWR1LnZuIiwibmFtZSI6Ik5ndXnhu4VuIFRo4buLIFTGsMahaSIsImlkIjo2LCJyb2xlIjpbeyJpZCI6MSwibmFtZSI6IkFETUlOIn0seyJpZCI6MiwibmFtZSI6Ik1BTkFHRVIifV0sImlhdCI6MTczMDY4ODE4MCwiZXhwIjoxNzMwNzc0NTgwfQ.fRH5l8gGWGhlqBYc6cNeM6QBR-tQE4BenvIUEshqX8I";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance };
