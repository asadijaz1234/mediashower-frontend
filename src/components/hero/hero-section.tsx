import React, { useCallback } from "react";

import { styled } from "@mui/material/styles";
import Container, { ContainerProps } from "@mui/material/Container";

//Interfaces
export interface HeroSectionProps extends React.ComponentPropsWithoutRef<"section"> {
  disableContainer?: boolean;
  ContainerProps?: ContainerProps;
}

//Styles
export const HeroSectionStyles = styled("section", {
  target: "HeroSection-root",
})(({ theme }) => {
  return {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "stretch",
    minHeight: 668,
    overflow: "hidden",

    [theme.breakpoints.down("lg")]: {
      minHeight: 400,
    },

    "& .MuiContainer-root": {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      justifyContent: "end",
      alignItems: "center",

      [theme.breakpoints.down("md")]: {
        gridTemplateRows: "1fr 500px",
        gridTemplateColumns: "1fr",
      },

      "&:after": {
        content: "''",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0,

        [theme.breakpoints.down("lg")]: {
          gridColumn: "1 / 2",
        },

        [theme.breakpoints.down("md")]: {
          gridColumn: "1 / -1",
        },
      },

      "& .HeroContent-root": {
        position: "relative",
        padding: theme.spacing(4, 0),
        maxWidth: 536,
        zIndex: 1,

        [theme.breakpoints.down("lg")]: {
          maxWidth: 392,
        },

        [theme.breakpoints.down("md")]: {
          gridColumn: "1 / -1",
          padding: theme.spacing(8, 0, 0, 0),
        },
      },

      "& .HeroImage-root": {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        opacity: 1,

        [theme.breakpoints.down("md")]: {
          gridRow: "2 / -1",
          gridColumn: "1 / -1",
        },
      },
    },
  };
});

//Component
export const HeroSection = (props: HeroSectionProps) => {
  const { disableContainer, ContainerProps, children, ...other } = props;

  const ContainerComponent = useCallback(
    (params: ContainerProps) => {
      if (disableContainer) {
        return <React.Fragment {...params} />;
      }

      return <Container {...params} />;
    },
    [disableContainer]
  );

  return (
    <HeroSectionStyles {...other}>
      <ContainerComponent {...ContainerProps}>{children}</ContainerComponent>
    </HeroSectionStyles>
  );
};
