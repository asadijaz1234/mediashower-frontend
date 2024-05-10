"use client";

import Image from "next/image";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography, { TypographyProps } from "@mui/material/Typography";

import heroImage from "~/assets/images/platform-hero-dark.jpg";

//Interfaces
export interface PlatformHeroSectionProps
  extends React.ComponentPropsWithoutRef<"section"> {}

//Styles
const TitleStyles = styled((props: TypographyProps) => (
  <Typography variant="h3" {...props} />
))(({ theme }) => {
  return {
    color: "inherit",

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.pxToRem(38),
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(34),
    },
  };
});

const ImageStyles = styled(Image, {
  target: "PlatformSectionImage-root",
})(({ theme }) => {
  return {
    objectFit: "cover",
    objectPosition: "100px -24px",
    filter: "brightness(1.1)",
  };
});

const ContentStyles = styled("div", {
  target: "PlatformSectionContent-root",
})(({ theme }) => {
  return {
    position: "relative",
    color: theme.palette.common.white,
    maxWidth: 620,
    width: "100%",
    zIndex: 2,
  };
});

const SectionStyles = styled("section")(({ theme }) => {
  const bgColorDark = "#499cba";
  const bgColorLight = "#92CBE1";

  return {
    position: "relative",
    display: "flex",
    backgroundColor: bgColorDark,
    backgroundImage: `linear-gradient(to right, ${bgColorDark} 45%, ${bgColorLight} 65%)`,
    height: 668,
    overflow: "hidden",

    "& .MuiContainer-root": {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr 1fr",
      alignItems: "center",
      justifyContent: "start",

      "&::after": {
        content: "''",
        position: "absolute",
        gridRow: "1 / -1",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundImage: `linear-gradient(to right, ${bgColorDark} 10%, transparent 35% 85%, ${bgColorLight})`,
        zIndex: 1,
      },

      "& .PlatformSectionImage-root": {
        gridRow: "1 / -1",
      },

      "& .PlatformSectionContent-root": {
        gridRow: "1 / -1",
      },
    },

    [theme.breakpoints.down("lg")]: {
      backgroundColor: bgColorLight,
      backgroundImage: "none",
      height: 792,

      "& .MuiContainer-root": {
        gridTemplateRows: "1fr 591px",
        alignItems: "start",
        justifyContent: "start",

        "& .PlatformSectionImage-root": {
          objectFit: "cover",
          objectPosition: "center top",
          gridRow: "2 / -1",
          filter: "none",
        },

        "& .PlatformSectionContent-root": {
          gridRow: "1 / 2",
          marginTop: theme.spacing(9),
        },

        "&::after": {
          gridRow: "2 / -1",
          backgroundImage: `
            linear-gradient(to bottom, ${bgColorLight}, transparent 20%),
            linear-gradient(to right, ${bgColorDark}, transparent 0% 85%, ${bgColorLight})
          `,
        },
      },
    },

    [theme.breakpoints.down("md")]: {
      "& .MuiContainer-root": {
        "& .PlatformSectionContent-root": {
          maxWidth: 286,
          marginTop: theme.spacing(8),
        },
        "&::after": {
          backgroundImage: `
            linear-gradient(to bottom, ${bgColorLight}, transparent 20%)
          `,
        },
      },
    },
  };
});

//Component
export const PlatformHeroSection = (props: PlatformHeroSectionProps) => {
  return (
    <SectionStyles>
      <Container>
        <ImageStyles
          src={heroImage}
          alt="Platform Hero"
          priority
          fill
          sizes="(max-width: 660px) 828px, 1200px"
          quality={90}
        />
        <ContentStyles>
          <TitleStyles>
            One platform <br />
            to create great marketing materials that everyone loves.
          </TitleStyles>
        </ContentStyles>
      </Container>
    </SectionStyles>
  );
};
