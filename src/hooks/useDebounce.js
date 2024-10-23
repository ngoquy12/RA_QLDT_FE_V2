import { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
  const [debounceSearch, setDebounceSearch] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceSearch(value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  return debounceSearch;
}
