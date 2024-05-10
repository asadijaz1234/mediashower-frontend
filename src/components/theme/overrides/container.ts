import { Components, Theme } from "@mui/material/styles";

export const Container = (theme: Theme): Components => {
  return {
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl-dense",
      },
      styleOverrides: {
        root: {
          paddingLeft: theme.spacing(2.5),
          paddingRight: theme.spacing(2.5),

          [theme.breakpoints.up("sm")]: {
            paddingLeft: theme.spacing(2.5),
            paddingRight: theme.spacing(2.5),
          },
        },
      },
    },
  };
};
