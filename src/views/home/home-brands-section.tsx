"use client";

import React from "react";

import { styled, useTheme } from "@mui/material/styles";
import Image, { ImageProps } from "next/image";
import Container from "@mui/material/Container";
import Typography, { TypographyProps } from "@mui/material/Typography";

import { Carousel, CarouselProps } from "~/components/carousel";

import microsoftLogo from "~/assets/images/logos/ms-logo.png";
import figmaLogo from "~/assets/images/logos/figma-logo.png";
import preciselyLogo from "~/assets/images/logos/precisely-logo.png";
import meltwaterLogo from "~/assets/images/logos/meltwater-logo.png";
import staplesLogo from "~/assets/images/logos/staples-logo.png";
import bmcLogo from "~/assets/images/logos/bmc_logo_header.png";
import dellLogo from "~/assets/images/logos/Dell_EMC_logo.png";
import intuitMintLogo from "~/assets/images/logos/Mint-Logo.png";
import solarwindsLogo from "~/assets/images/logos/solarwinds-logo.png";
import intuitLogo from "~/assets/images/logos/Intuit_Logo.png";
import reputationLogo from "~/assets/images/logos/Reputation_Logo.png";
import ringCentralLogo from "~/assets/images/logos/RingCentral_logo_fullcolor.png";
import walmartLogo from "~/assets/images/logos/Walmart-Logo.png";

//Interfaces
export interface HomeBrandsSectionProps extends React.ComponentPropsWithoutRef<"div"> {}

//Styles
const BrandImageStyles = styled((props: ImageProps) => <Image quality={100} sizes="850px" {...props} fill alt="" />)(
  ({ theme }) => {
    return {
      position: "absolute",
      display: "block",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: "100%",
      height: "100%",
      objectFit: "contain",
      objectPosition: "center center",
    };
  }
);

const BrandItemStyles = styled("a")(({ theme }) => {
  return {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
    width: 164,
    height: 30,
    filter: "grayscale(1)",
    opacity: 0.65,
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shortest,
    }),

    "&:hover": {
      filter: "none",
      opacity: 1,
    },
  };
});

const CarouselStyles = styled(Carousel)(({ theme }) => {
  return {
    marginTop: theme.spacing(-4),

    "& .slick-prev": {
      left: theme.spacing(-2.5),
    },

    "& .slick-next": {
      right: theme.spacing(-2.5),
    },

    [theme.breakpoints.down("xl")]: {
      "& .slick-arrow": {
        display: "none",
      },
    },
  };
});

const TitleStyles = styled((props: TypographyProps) => <Typography variant="h5" {...props} />)(({ theme }) => {
  return {
    fontSize: theme.typography.pxToRem(24),
    textAlign: "center",
    marginBottom: theme.spacing(5),
  };
});

const SectionStyles = styled("div")(({ theme }) => {
  return {
    color: theme.palette.text.secondary,
    backgroundColor: "#F4F4F4",
    padding: theme.spacing(6, 0, 4, 0),

    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(7, 0),
    },
  };
});

//Component
export const HomeBrandsSection = (props: HomeBrandsSectionProps) => {
  const theme = useTheme();

  const carouselSettings: CarouselProps = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <SectionStyles>
      <Container>
        <TitleStyles>Over 100,000 marketing projects delivered to 500+ happy clients:</TitleStyles>
        <CarouselStyles {...carouselSettings}>
          <BrandItemStyles href="#">
            <BrandImageStyles src={microsoftLogo} alt="Micrososoft Logo" />
          </BrandItemStyles>
          <BrandItemStyles href="#">
            <BrandImageStyles src={figmaLogo} alt="Figma Logo" />
          </BrandItemStyles>
          <BrandItemStyles href="#" sx={{ height: { xs: 30, sm: 34 } }}>
            <BrandImageStyles src={preciselyLogo} alt="Precisely Logo" />
          </BrandItemStyles>
          <BrandItemStyles href="#" sx={{ width: { sm: 180 } }}>
            <BrandImageStyles src={meltwaterLogo} alt="Meltwater Logo" />
          </BrandItemStyles>
          <BrandItemStyles href="#" sx={{ height: { xs: 24 } }}>
            <BrandImageStyles src={staplesLogo} alt="Staples Logo" />
          </BrandItemStyles>

          <BrandItemStyles href="#" sx={{ height: { xs: 40 } }}>
            <BrandImageStyles src={bmcLogo} alt="bmc Logo" />
          </BrandItemStyles>
          <BrandItemStyles href="#">
            <BrandImageStyles src={dellLogo} alt="DellEMC Logo" />
          </BrandItemStyles>
          <BrandItemStyles href="#" sx={{ height: { xs: 40 } }}>
            <BrandImageStyles src={intuitMintLogo} alt="Mint Logo" />
          </BrandItemStyles>
          <BrandItemStyles href="#" sx={{ width: { sm: 200 }, height: { xs: 36, sm: 44 } }}>
            <BrandImageStyles sizes="1200px" src={solarwindsLogo} alt="Solarwinds Logo" />
          </BrandItemStyles>
          <BrandItemStyles href="#" sx={{ height: { xs: 34 } }}>
            <BrandImageStyles src={intuitLogo} alt="Intuit Logo" />
          </BrandItemStyles>
          <BrandItemStyles href="#" sx={{ width: { sm: 180 }, height: { xs: 36, sm: 40 } }}>
            <BrandImageStyles src={reputationLogo} alt="Reputation Logo" />
          </BrandItemStyles>
          <BrandItemStyles href="#" sx={{ height: { xs: 36, sm: 40 } }}>
            <BrandImageStyles src={ringCentralLogo} alt="RingCentrar Logo" />
          </BrandItemStyles>
          <BrandItemStyles href="#" sx={{ height: { xs: 42, sm: 46 } }}>
            <BrandImageStyles src={walmartLogo} alt="Walmart Logo" quality={90} />
          </BrandItemStyles>
        </CarouselStyles>
      </Container>
    </SectionStyles>
  );
};
