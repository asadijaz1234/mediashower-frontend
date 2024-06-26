import { Components, Theme } from "@mui/material/styles";

export const TextField = (theme: Theme): Components => {
  return {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        color: "secondary",
        size: "small",
      },
    },
  };
};
