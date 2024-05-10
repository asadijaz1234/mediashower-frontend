"use client";

import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { NextAppDirEmotionCacheProvider } from "~/components/theme/emotion-cache";
import { typography } from "./typography";
import { breakpoints } from "./breakpoints";
import { palette } from "./palette";
import { shape } from "./shape";
import { componentOverrides } from "./overrides";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const theme = createTheme({
    palette,
    typography,
    breakpoints,
    shape,
  });

  theme.components = componentOverrides(theme);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
};
