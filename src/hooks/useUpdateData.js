import { useState } from "react";
import axios from "axios";

export function useUpdateData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const updateData = async (url, payload, method = "PUT") => {
    // Thêm method với mặc định là PUT
    setLoading(true);
    try {
      const result = await axios({
        method: method, // Dùng method được truyền vào (PUT, PATCH,...)
        url: url,
        data: payload,
      });
      setResponse(result.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { updateData, response, loading, error };
}
