import { Palette, alpha } from "@mui/material/styles";

declare module "@mui/material" {
  interface Color {
    150: string;
  }

  interface Palette {
    grey: Color;
  }
}

export const palette: Partial<Palette> = {
  primary: {
    main: "#78B5FF",
    light: "#78B5FF",
    dark: "#5295CB",
    contrastText: "#FFF",
  },

  secondary: {
    main: "#FF9100",
    light: "#fed5b3",
    dark: "#dc8615",
    contrastText: "#FFF",
  },

  text: {
    primary: "#1E1E1E",
    secondary: "#6B6B6B",
    disabled: "rgba(0, 0, 0, 0.38)",
  },

  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.6,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.1,
  },

  divider: alpha("#3a3541", 0.12),

  background: {
    default: "#fff",
    paper: "#fff",
  },

  grey: {
    "50": "#f2f2f2",
    "100": "#f5f5f5",
    "150": "#f4f4f4",
    "200": "#eeeeee",
    "300": "#e0e0e0",
    "400": "#bdbdbd",
    "500": "#9e9e9e",
    "600": "#757575",
    "700": "#616161",
    "800": "#404041",
    "900": "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
};
