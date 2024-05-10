import { Theme, Components, alpha } from "@mui/material/styles";

export const Button = (theme: Theme): Components => {
  return {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "inherit",
        size: "small",
        disableElevation: true,
      },
      styleOverrides: {
        root: {},
        sizeSmall: {
          fontSize: theme.typography.pxToRem(12),
          fontWeight: theme.typography.fontWeightMedium,
          lineHeight: 1.2,
          minHeight: 32,
          borderRadius: theme.shape.borderRadiusSmall,
          letterSpacing: 0.4,
        },
        contained: {
          padding: theme.spacing(0, 2.5),
        },
        containedPrimary: {
          "&.Mui-disabled": {
            color: theme.palette.primary.contrastText,
            backgroundColor: alpha(
              theme.palette.primary.main,
              theme.palette.action.disabledOpacity
            ),
          },
        },
        containedInherit: {
          backgroundColor: theme.palette.grey[800],
          color: "#fff",

          "&:hover": {
            backgroundColor: theme.palette.grey[600],
          },
        },
      },
    },
  };
};
