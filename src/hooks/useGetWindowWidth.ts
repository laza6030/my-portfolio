import { useState, useEffect } from "react";
import { MOBILE_DEVICE_WIDTH } from "../constants";

const SCREEN_DEFAULT_WIDTH = 1024; // This is an arbitrary choice

export const useGetWindowWidth = () => {
  const [width, setWidth] = useState(SCREEN_DEFAULT_WIDTH);

  useEffect(() => {
    if (screen) {
      window.addEventListener("resize", () => setWidth(screen.width));
      return window.removeEventListener("resize", () => setWidth(screen.width));
    }
  }, []);

  const isMobile = width <= MOBILE_DEVICE_WIDTH;

  return { width, isMobile };
};
