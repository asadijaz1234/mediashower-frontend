import { Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface ShapeOptions {
    borderRadiusSmall: number | string;
    borderRadius: number | string;
    borderRadiusLarge?: number | string;
  }

  interface Theme {
    shape: ShapeOptions;
  }

  interface ThemeOptions {
    shape?: ShapeOptions;
  }
}

export const shape: Theme["shape"] = {
  borderRadiusSmall: 3,
  borderRadius: 6,
  borderRadiusLarge: 12,
};
