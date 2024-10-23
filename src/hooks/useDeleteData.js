import { useState } from "react";
import axios from "axios";

export function useDeleteData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const deleteData = async (url) => {
    setLoading(true);
    try {
      const result = await axios.delete(url);
      setResponse(result.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { deleteData, response, loading, error };
}
