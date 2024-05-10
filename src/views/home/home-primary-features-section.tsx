import NextLink from "next/link";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Paper, { PaperProps } from "@mui/material/Paper";
import Button from "@mui/material/Button";

import contentPlatformImage from "~/assets/images/end-to-end-content-platform-original.png";
import productionStudioImage from "~/assets/images/full-production-studio-original.jpeg";
import timerImage from "~/assets/images/timer.png";

//Interfaces
export interface HomePrimaryFeaturesSectionProps {}

//Styles
const TitlePrimaryStyles = styled((props: TypographyProps) => (
  <Typography variant="h4" {...props} />
))(({ theme }) => {
  return {
    textAlign: "center",
    marginBottom: theme.spacing(2),

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.pxToRem(32),
    },
  };
});

const TitleSecondaryStyles = styled((props: TypographyProps) => (
  <Typography variant="h6" {...props} />
))(({ theme }) => {
  return {
    fontSize: theme.typography.pxToRem(19),
    textAlign: "center",
    marginBottom: theme.spacing(4),
  };
});

const BasicCardStyles = styled((props: PaperProps) => (
  <Paper elevation={0} {...props} />
))(({ theme }) => {
  return {
    position: "relative",
    display: "grid",
    gridTemplateRows: "182px 1fr",
    gridTemplateColumns: "1fr",
    minHeight: 364,
    overflow: "hidden",

    "&:hover": {
      boxShadow: "0 4px 4px 0 rgba(0,0,0, .25)",
    },

    "& img": {
      gridRow: "1 / -1",
      zIndex: 0,
    },

    "&:after": {
      position: "absolute",
      content: "''",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
  };
});

const CardBodyStyles = styled("div")(({ theme }) => {
  return {
    position: "relative",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    gridRow: "2 / 3",
    textAlign: "center",
    padding: theme.spacing(0, 3.5, 3.5, 3.5),
    zIndex: 1,

    "& .MuiButton-root": {
      width: "100%",
      maxWidth: 164,
      marginTop: theme.spacing(2),
    },
  };
});

const CardTitleStyles = styled((props: TypographyProps) => (
  <Typography variant="h5" {...props} />
))(({ theme }) => {
  return {
    fontSize: theme.typography.pxToRem(21),
    textAlign: "center",
    marginBottom: theme.spacing(1),
  };
});

const PlatformCardStyles = styled(BasicCardStyles)(({ theme }) => {
  const bgColor = "#b3effa";

  return {
    color: "#000",
    backgroundColor: bgColor,

    "& img": {
      objectFit: "cover",
      objectPosition: "-36px -48px",
      transform: "scale(.75)",
      transformOrigin: "top",
      minHeight: 458,
    },

    "&:after": {
      backgroundImage: `
        linear-gradient(107deg, ${bgColor}, transparent 32%),
        linear-gradient(to left, ${bgColor} 10%, transparent 25%),
        linear-gradient(to top, ${bgColor} 30%, transparent 55%)
      `,
    },
  };
});

const ProductionStudioCardStyles = styled(BasicCardStyles)(({ theme }) => {
  const bgColor = "#fc9c2e";

  return {
    color: "#fff",
    backgroundColor: bgColor,

    "& img": {
      objectFit: "cover",
      objectPosition: "center top",
      transform: "scale(.75)",
      transformOrigin: "top",
    },

    "&:after": {
      backgroundImage: `
        linear-gradient(to top, ${bgColor} 40%, transparent 50%), 
        linear-gradient(to left, ${bgColor} 10%, transparent 25% 75%, ${bgColor} 90%)
      `,
    },
  };
});

const SassModelCardStyles = styled(BasicCardStyles)(({ theme }) => {
  const bgColor = "#acacac";

  return {
    color: "#fff",
    backgroundColor: bgColor,

    "& img": {
      gridRow: "1 / 2",
      objectFit: "cover",
      objectPosition: "center -25px",
      minHeight: 318,
      transform: "scale(.75)",
      transformOrigin: "top",
    },

    "&:after": {
      backgroundImage: `
        linear-gradient(to right, ${bgColor} 10%, transparent 25% 75%, ${bgColor} 90%), 
        linear-gradient(to top, ${bgColor} 35%, transparent 45%)
      `,
      zIndex: 0,
    },
  };
});

const ListStyles = styled("div")(({ theme }) => {
  const itemSize = "min(310px, 100%)";

  return {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(${itemSize}, 1fr))`,
    justifyContent: "center",
    gridGap: theme.spacing(4.5),

    "& > a": {
      textDecoration: "none",
    },

    [theme.breakpoints.down("xl-dense")]: {
      gridGap: theme.spacing(2.5),
    },

    [theme.breakpoints.down(1094)]: {
      gridTemplateColumns: `minmax(${itemSize}, 476px)`,
    },
  };
});

const SectionStyles = styled("div")(({ theme }) => {
  return {
    backgroundColor: "#fff",
    margin: theme.spacing(8, 0),

    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(7, 0),
    },
  };
});

//Component
export const HomePrimaryFeaturesSection = (
  props: HomePrimaryFeaturesSectionProps
) => {
  return (
    <SectionStyles>
      <Container>
        <TitlePrimaryStyles>From Overworked to Overjoyed.</TitlePrimaryStyles>
        <TitleSecondaryStyles>
          We help <strong>busy marketing teams</strong> create{" "}
          <strong>great marketing materials</strong> that everyone loves.
        </TitleSecondaryStyles>
        <ListStyles>
          <PlatformCardStyles>
            <Image
              src={contentPlatformImage}
              alt="End-to-End Content Platform"
              fill
              sizes="750px"
              quality={95}
            />
            <CardBodyStyles>
              <div>
                <CardTitleStyles>End-to-End Content Platform</CardTitleStyles>
                <Typography>
                  Create an account. Kickoff your brand.
                  <br />
                  Then just point, click, and order.
                </Typography>
              </div>
              <Button
                variant="contained"
                color="inherit"
             
                href="/platform"
              >
                See the platform
              </Button>
            </CardBodyStyles>
          </PlatformCardStyles>

          <ProductionStudioCardStyles>
            <Image
              src={productionStudioImage}
              alt="Full Production Studio"
              sizes="750px"
              fill
              quality={95}
            />
            <CardBodyStyles>
              <div>
                <CardTitleStyles>Full Production Studio</CardTitleStyles>
                <Typography>
                  Extend your team with our award-
                  <br />
                  winning content creators, specialized
                  <br />
                  to your industry.
                </Typography>
              </div>
              <Button
                variant="contained"
                color="inherit"
            
                href="/products"
              >
                See the products
              </Button>
            </CardBodyStyles>
          </ProductionStudioCardStyles>

          <SassModelCardStyles>
            <Image
              src={timerImage}
              alt="Monthly Sass Model"
              fill
              sizes="750px"
              quality={100}
            />
            <CardBodyStyles>
              <div>
                <CardTitleStyles>Monthly SaaS Model</CardTitleStyles>
                <Typography>
                  Start and stop anytime.
                  <br />
                  No long-term hires.
                  <br />
                  No long-term contracts.
                </Typography>
              </div>
              <Button
                variant="contained"
                color="inherit"
          
                href="/pricing"
              >
                See the pricing
              </Button>
            </CardBodyStyles>
          </SassModelCardStyles>
        </ListStyles>
      </Container>
    </SectionStyles>
  );
};
