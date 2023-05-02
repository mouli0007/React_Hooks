import { useEffect, useState } from "react";

const useDebounce = (value: any, delay: number) => {
  const [deBounced_Value, setDebounced_Value] = useState<any>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced_Value(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return deBounced_Value;
};

export default useDebounce;
