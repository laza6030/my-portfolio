import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: {
      main: string;
      dark: string;
    };

    text: {
      main: string;
      white: string;
      highlight: string;
    };

    title: {
      main: string;
      secondary: string;
    };
  }
}
