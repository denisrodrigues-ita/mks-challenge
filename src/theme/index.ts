import { createGlobalStyle } from "styled-components";
import { fonts } from "./fonts";
import { colors } from "./colors";
import { breakpoints } from "./breakpoints";

export const theme = {
  colors,
  fonts,
  breakpoints,
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.fonts.standard};
  }

  :root {
    font-size: 62.5%;
  }

`;
