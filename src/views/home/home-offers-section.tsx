import Image from "next/image";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography, { TypographyProps } from "@mui/material/Typography";

import { HomeOffersAccordion } from "./home-offers-accordion";
import offersImage from "~/assets/images/home-offers-original.jpeg";

//Interfaces
export interface HomeOffersSectionProps
  extends React.ComponentPropsWithoutRef<"div"> {}

//Styles
const HomeOffersTitlePrimaryStyles = styled((props: TypographyProps) => (
  <Typography variant="h4" {...props} />
))(({ theme }) => {
  return {
    marginBottom: theme.spacing(2),

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.pxToRem(32),
    },

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  };
});

const HomeOffersTitleSecondaryStyles = styled((props: TypographyProps) => (
  <Typography variant="h6" {...props} />
))(({ theme }) => {
  return {
    marginBottom: theme.spacing(3),

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  };
});

const HomeOffersContentStyles = styled("div")(({ theme }) => {
  return {
    position: "relative",
    maxWidth: 480,
    color: theme.palette.common.white,
    padding: theme.spacing(8, 0),
    zIndex: 1,

    [theme.breakpoints.down("lg")]: {
      gridRow: "1 / 2",
      padding: theme.spacing(7, 0, 6.5, 0),
    },

    [theme.breakpoints.down("md")]: {
      gridColumn: "1 / -1",
      justifySelf: "center",
    },
  };
});

const HomeOffersImageStyles = styled(Image)(({ theme }) => {
  return {
    gridColumn: "2 / 3",
    objectFit: "cover",
    objectPosition: "center bottom",
    maxHeight: 526,

    [theme.breakpoints.down("lg")]: {
      maxHeight: "none",
    },

    [theme.breakpoints.down("md")]: {
      gridColumn: "1 / -1",
      gridRow: "2 / 3",
      objectPosition: "center top",
      transform: "scale(1.1)",
      transformOrigin: "bottom",
    },
  };
});

const HomeOffersSectionStyles = styled("div")(({ theme }) => {
  const bgColor = "#FF9100";

  return {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "stretch",
    minHeight: 526,
    backgroundColor: bgColor,
    overflow: "hidden",

    "& .MuiContainer-root": {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",

      [theme.breakpoints.down("md")]: {
        gridTemplateRows: "1fr 464px",
        justifyContent: "center",
        alignItems: "start",
      },

      [theme.breakpoints.down("sm")]: {
        gridTemplateRows: "1fr 456px",
      },

      "&:after": {
        gridColumn: "2 / 3",
        content: "''",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundImage: `
          linear-gradient(to right, ${bgColor} 0%, transparent 25%), 
          linear-gradient(to left, ${bgColor} 0%, transparent 20%)
        `,
        zIndex: 0,

        [theme.breakpoints.down("md")]: {
          gridColumn: "1 / -1",
          gridRow: "2 / -1",
          transform: "scale(1.11)",
          transformOrigin: "bottom",
          backgroundImage: `
            linear-gradient(to bottom, ${bgColor} 0%, transparent 10%),
            linear-gradient(to right, ${bgColor} 0%, transparent 25%), 
            linear-gradient(to left, ${bgColor} 0%, transparent 20%)
          `,
        },
      },
    },
  };
});

//Component
export const HomeOffersSection = (props: HomeOffersSectionProps) => {
  return (
    <HomeOffersSectionStyles {...props}>
      <Container>
        <HomeOffersImageStyles
          src={offersImage}
          alt="Offers"
          fill
          sizes="(max-width: 768px) 828px, 1200px"
          quality={90}
        />
        <HomeOffersContentStyles>
          <HomeOffersTitlePrimaryStyles>
            No Drama, Just Delight.
          </HomeOffersTitlePrimaryStyles>
          <HomeOffersTitleSecondaryStyles>
            Beat the Impossible Deadline and the Impossible Reviewer – and move
            your marketing team from stress to success.
          </HomeOffersTitleSecondaryStyles>
          <HomeOffersAccordion />
        </HomeOffersContentStyles>
      </Container>
    </HomeOffersSectionStyles>
  );
};
