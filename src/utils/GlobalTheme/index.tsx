"use client";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@/theme";
import { PropsWithChildren } from "react";

const GlobalTheme: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default GlobalTheme;
