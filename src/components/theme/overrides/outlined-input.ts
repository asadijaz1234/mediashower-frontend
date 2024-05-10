import { Components, Theme } from "@mui/material/styles";

export const OutlinedInput = (theme: Theme): Components => {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: theme.palette.grey["800"],

          "&.Mui-disabled": {
            color: "inherit",

            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.grey["800"],
            },
          },
          "&.MuiInputBase-adornedEnd": {
            paddingRight: theme.spacing(0.75),
          },

          "&.MuiInputBase-adornedStart": {
            paddingLeft: theme.spacing(2),

            "& .MuiInputAdornment-positionStart": {
              marginRight: 0,
            },
          },

          "& .MuiInputAdornment-root": {
            color: theme.palette.text.secondary,

            "& .MuiIconButton-root": {
              color: "inherit",
            },
          },
        },
        sizeSmall: {
          minHeight: 34,
          borderRadius: theme.shape.borderRadiusSmall,
        },
        input: {
          "&.Mui-disabled": {
            color: theme.palette.text.secondary,
            WebkitTextFillColor: theme.palette.text.secondary,
          },

          "&::placeholder": {
            color: theme.palette.grey["800"],
            opacity: 1,
          },
        },
        inputSizeSmall: {
          fontSize: theme.typography.pxToRem(12),
          fontWeight: theme.typography.fontWeightMedium,
          padding: theme.spacing(1, 2),
          borderRadius: theme.shape.borderRadiusSmall,

          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: theme.shape.borderRadiusSmall,
          },
        },
        notchedOutline: {
          borderColor: theme.palette.grey["800"],
        },
        multiline: {
          padding: theme.spacing(1.75, 2),

          "& .MuiInputBase-inputMultiline": {
            padding: 0,
          },
        },
      },
    },
  };
};
