import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token") || "";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InR1b2ludEByaWtrZWkuZWR1LnZuIiwibmFtZSI6Ik5ndXnhu4VuIFRo4buLIFTGsMahaSIsImlkIjo2LCJyb2xlIjpbeyJpZCI6MSwibmFtZSI6IkFETUlOIn0seyJpZCI6MiwibmFtZSI6Ik1BTkFHRVIifV0sImlhdCI6MTcyOTY3NjExNywiZXhwIjoxNzI5NzYyNTE3fQ.IwRXXPvkLnY9O941Qh_c8qsox7RFDfvKovSdXq132LA";

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
