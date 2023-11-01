import { SPACING_UNIT } from "./constants";

const theme = {
  spacing: (times: number) => SPACING_UNIT * times,

  background: {
    main: "#32395c",
    dark: "#28262e",
  },

  text: {
    main: "#bde1ff",
    white: "#ebffff",
    highlight: "#00e5d7",
  },

  title: {
    main: "#b88aa6",

    secondary: "#c2c291", // yellow
  },
};

export default theme;
