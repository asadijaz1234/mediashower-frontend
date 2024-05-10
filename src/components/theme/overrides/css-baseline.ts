import { Theme, Components } from "@mui/material/styles";

export const CssBaseline = (theme: Theme): Components => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        "*,*::after,*::before": {
          boxSizing: "inherit",
          margin: 0,
          padding: 0,
        },
        html: {
          width: "100%",
          height: "100%",
          fontSize: "62.5%",
        },
        body: {
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
        },
        "input[type=number]": {
          appearance: "textfield",

          "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
            appearance: "none",
            margin: 0,
            opacity: 1,
          },
        },
        svg: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fill: "currentColor",
        },
        ul: {
          listStyle: "none",
        },
        ".grecaptcha-badge": {
          zIndex: 9999,
        },
      },
    },
  };
};
