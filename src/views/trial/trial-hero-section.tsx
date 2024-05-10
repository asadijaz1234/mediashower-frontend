"use client";

import Image from "next/image";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography, { TypographyProps } from "@mui/material/Typography";

import heroImage from "~/assets/images/trial-hero.jpg";

//Interfaces
export interface TrialHeroSectionProps
  extends React.ComponentPropsWithoutRef<"section"> {}

//Styles
const TitleStyles = styled((props: TypographyProps) => (
  <Typography variant="h2" {...props} />
))(({ theme }) => {
  return {
    color: "black",

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.pxToRem(38),
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(36),
    },
  };
});

const SubtitleStyles = styled((props: TypographyProps) => (
  <Typography variant="h5" {...props} />
))(({ theme }) => {
  return {
    color: "black",
    marginTop: theme.spacing(4),

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.pxToRem(28),
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(20),
    },
  };
});

const ImageStyles = styled(Image, {
  target: "TrialSectionImage-root",
})(({ theme }) => {
  return {
    objectFit: "cover",
    // objectPosition: "120px -24px",
    filter: "brightness(1.1)",
    display: "flex",
  };
});

const ContentStyles = styled("div", {
  target: "TrialSectionContent-root",
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
  const bgColorDark = "#fac020";
  const bgColorLight = "#fac020";

  return {
    position: "relative",
    display: "flex",
    backgroundColor: bgColorDark,
    backgroundImage: `linear-gradient(to right, ${bgColorDark} 45%, ${bgColorLight} 65%)`,
    height: 630,
    overflow: "hidden",
    width: "100%",
    zIndex: 2,

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
        backgroundImage: `linear-gradient(to right, ${bgColorDark} 15%, transparent 25% 100%, ${bgColorLight})`,
        zIndex: 1,
      
      },

      "& .TrialSectionImage-root": {
        gridRow: "1 / -1",
        marginLeft: theme.spacing(25),
      },

      "& .TrialSectionContent-root": {
        gridRow: "1 / -2",
        marginTop: theme.spacing(10),
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

        "& .TrialSectionImage-root": {
          objectFit: "cover",
          objectPosition: "center top",
          gridRow: "2 / -1",
          filter: "none",
          marginLeft: '0',
        },

        "& .TrialSectionContent-root": {
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
        "& .TrialSectionContent-root": {
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
export const TrialHeroSection = (props: TrialHeroSectionProps) => {
  return (
    <SectionStyles>
      <Container>
        <ImageStyles
          src={heroImage}
          alt="Trial Hero"
          priority
          fill
          // sizes="(max-width: 660px) 828px, 1200px"
          quality={90}
        />
        <ContentStyles>
          <TitleStyles>
            Upgrade to Make <br /> Your Marketing <br />
            Even Better.
          </TitleStyles>
          <SubtitleStyles>
            Your free trial has ended.{" "}
            <a
              style={{
                color: "black",
                textDecoration: "underline",
              }}
            >
              Upgrade now{" "}
            </a>
            to do your <br /> marketing faster, cheaper, and better.
          </SubtitleStyles>
        </ContentStyles>
      </Container>
    </SectionStyles>
  );
};
