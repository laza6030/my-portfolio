import { useState, useEffect } from "react";
import { MOBILE_DEVICE_WIDTH } from "../constants";

export const useGetWindowWidth = () => {
  const [width, setWidth] = useState(screen.width);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(screen.width));
    return window.removeEventListener("resize", () => setWidth(screen.width));
  }, []);

  const isMobile = width <= MOBILE_DEVICE_WIDTH;

  return { width, isMobile };
};
