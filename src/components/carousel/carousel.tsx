"use client";

import React from "react";

import Slider, { Settings as SliderSettings } from "react-slick";
import { styled } from "@mui/material/styles";

import { CarouselItem } from "./carousel-item";
import { CarouselNextBtn } from "./carousel-next-btn";
import { CarouselPrevBtn } from "./carousel-prev-btn";

//Interfaces
export interface CarouselProps extends SliderSettings {}

//Styles
export const CarouselStyles = styled(Slider)(({ theme }) => {
  return {
    "& .slick-prev, & .slick-next": {
      width: 40,
      height: 40,
      zIndex: 2,

      "&::before": {
        content: "none",
      },
    },

    "& .slick-list": {
      padding: theme.spacing(4, 0),
    },

    "& .slick-track": {
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
      justifyContent: "center",
    },

    "& .slick-arrow": {
      "&.slick-disabled": {
        opacity: 0.3,
        pointerEvents: "none",
      },
    },

    "& .slick-dots": {
      bottom: 0,
      lineHeight: 0,

      "& li": {
        display: "inline-block",
        width: "auto",
        height: "auto",
        margin: theme.spacing(0, 0.5),

        "& button": {
          width: 6,
          height: 6,
          padding: 0,
          backgroundColor: "#DFDFDF",
          borderRadius: "50%",
          cursor: "pointer",

          "&::before": {
            content: "none",
          },
        },

        "&.slick-active": {
          "& button": {
            width: 8,
            height: 8,
            backgroundColor: "transparent",
            boxShadow: "inset 0 0 0 2px #C8C8C8",
          },
        },
      },
    },
  };
});

//Component
export const Carousel = (props: CarouselProps) => {
  const { children, ...other } = props;

  const items = React.Children.toArray(children)?.map((item, i) => {
    return <CarouselItem key={i}>{item}</CarouselItem>;
  });

  return (
    <CarouselStyles
      dots
      speed={300}
      initialSlide={0}
      nextArrow={<CarouselNextBtn />}
      prevArrow={<CarouselPrevBtn />}
      {...other}
    >
      {items}
    </CarouselStyles>
  );
};
