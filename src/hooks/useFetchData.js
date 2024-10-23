import { useState, useEffect } from "react";
import { axiosInstance } from "@/configs/axios";
import { HttpMethods } from "@/constants/httpMethods";

export function useFetchData(endPoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance[HttpMethods.GET](endPoint);
        console.log(response);

        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endPoint]);

  return { data, loading, error };
}
