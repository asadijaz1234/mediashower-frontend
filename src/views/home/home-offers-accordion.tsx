"use client";

import { useState } from "react";

import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";

import { PoligonSvg } from "~/assets/svg-icons";

//Interfaces
export interface HomeOffersAccordionProps {}

//Styles
export const HomeOffersAccordionContainerStyles = styled("div")(({ theme }) => {
  return {
    "& .MuiAccordion-root": {
      color: theme.palette.grey["800"],
      borderRadius: theme.shape.borderRadius,
      boxShadow: "none",
      minHeight: 54,
      transtion: theme.transitions.create("background-color", {
        duration: theme.transitions.duration.shortest,
      }),

      "&.Mui-expanded": {
        margin: 0,
        color: "#fff",
        backgroundColor: theme.palette.grey["800"],
      },

      "&:not(:first-of-type)": {
        marginTop: theme.spacing(1.5),
      },

      "& .MuiAccordionSummary-root": {
        minHeight: 0,
        padding: theme.spacing(0, 3),

        "&.Mui-expanded": {
          minHeight: 0,
        },

        "& .MuiIcon-root": {
          fontSize: theme.typography.pxToRem(12),
        },

        "& .MuiAccordionSummary-expandIconWrapper": {
          color: "inherit",
          margin: theme.spacing(2, 0, 0, 0),
        },

        "& .MuiAccordionSummary-content": {
          margin: theme.spacing(1.5, 0, 0, 0),

          "& .MuiTypography-root": {
            fontSize: theme.typography.pxToRem(20),
            fontWeight: theme.typography.fontWeightBold,
          },
        },
      },

      "& .MuiAccordionDetails-root": {
        padding: theme.spacing(1, 3, 2, 3),

        "& .MuiTypography-root": {
          fontSize: theme.typography.pxToRem(14),
          lineHeight: 1.5,
        },
      },
    },
  };
});

//Component
export const HomeOffersAccordion = (props: HomeOffersAccordionProps) => {
  const [activeItem, setActiveItem] = useState<number | undefined>(0);

  const handleChange = (index: number) => () => {
    setActiveItem((prevState) => {
      return prevState !== index ? index : undefined;
    });
  };

  return (
    <HomeOffersAccordionContainerStyles>
      <Accordion expanded={activeItem === 0} onChange={handleChange(0)}>
        <AccordionSummary
          expandIcon={
            <Icon>
              <PoligonSvg />
            </Icon>
          }
        >
          <Typography>Consistently Better Content</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Buy content creation credits for top-quality blogs, landing pages,
            ebooks, videos, social assets, and more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={activeItem === 1} onChange={handleChange(1)}>
        <AccordionSummary
          expandIcon={
            <Icon>
              <PoligonSvg />
            </Icon>
          }
        >
          <Typography>Modular Team Model</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Get a full-time content manager, plus a modular team of
            award-winning content creators: both consistency and flexibility.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={activeItem === 2} onChange={handleChange(2)}>
        <AccordionSummary
          expandIcon={
            <Icon>
              <PoligonSvg />
            </Icon>
          }
        >
          <Typography>Predictably Better Pricing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Your monthly SaaS subscription chops costs, with pricing that’s 4x
            cheaper than hiring a full-time content team.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </HomeOffersAccordionContainerStyles>
  );
};
