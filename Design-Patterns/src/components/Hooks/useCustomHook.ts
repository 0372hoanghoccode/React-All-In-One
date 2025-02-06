import { useState, useEffect } from "react";

const useCustomHook = (initialValue: number = 0) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return count;
};

export default useCustomHook;
