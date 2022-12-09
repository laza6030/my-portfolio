import { useState, useEffect } from "react";

export const useGetWindowWidth = () => {
  const [width, setWidth] = useState(screen.width);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(screen.width));
    return window.removeEventListener("resize", () => setWidth(screen.width));
  }, []);

  return { width };
};
