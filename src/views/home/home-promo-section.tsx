import Image from "next/image";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Paper, { PaperProps } from "@mui/material/Paper";

import laptopImage from "~/assets/images/laptop.png";
import girlImage from "~/assets/images/girl-yellow.jpeg";
import mouseImage from "~/assets/images/mouse-original.jpeg";

//Interfaces
export interface HomePromoSectionProps
  extends React.ComponentPropsWithoutRef<"div"> {}

//Styles
const TitlePrimaryStyles = styled((props: TypographyProps) => (
  <Typography variant="h4" {...props} />
))(({ theme }) => {
  return {
    alignSelf: "center",
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
    textAlign: "center",
    marginBottom: theme.spacing(4),
    maxWidth: 860,
    alignSelf: "center",
  };
});

const BasicCardStyles = styled((props: PaperProps) => (
  <Paper elevation={0} {...props} />
))(({ theme }) => {
  return {
    position: "relative",
    display: "grid",
    gridTemplateRows: "1.8fr 1fr",
    gridTemplateColumns: "1fr",
    justifyItems: "center",
    minHeight: 330,
    overflow: "hidden",
    zIndex: 0,

    "&:after": {
      position: "absolute",
      content: "''",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 1,
    },

    "& img": {
      gridRow: "1 / -1",
      zIndex: 0,
    },
  };
});

const CardBodyStyles = styled("div")(({ theme }) => {
  return {
    position: "relative",
    display: "grid",
    gridTemplateRows: "min-content min-content",
    gridGap: theme.spacing(1),
    maxWidth: 320,
    gridRow: "2 / 3",
    textAlign: "center",
    padding: theme.spacing(0, 3.5, 3, 3.5),
    zIndex: 2,
  };
});

const CardStepTitleStyles = styled((props: TypographyProps) => (
  <Typography variant="body1" {...props} />
))(({ theme }) => {
  return {
    color: "inherit",
  };
});

const CardTitleStyles = styled((props: TypographyProps) => (
  <Typography variant="h5" {...props} />
))(({ theme }) => {
  return {
    color: "inherit",
  };
});

const Step1CardStyles = styled(BasicCardStyles)(({ theme }) => {
  const bgColor = "#FB867D";

  return {
    color: "#fff",
    backgroundColor: bgColor,

    "&:after": {
      backgroundImage: `
        linear-gradient(to top, ${bgColor} 35%, transparent 45%), 
        linear-gradient(to right, ${bgColor} 10%, transparent 25% 75%, ${bgColor} 90%)
      `,
    },

    "& img": {
      gridRow: "1 / 2",
      objectFit: "cover",
      objectPosition: "center top",
      minHeight: 354,
      transform: "scale(.8)",
      transformOrigin: "top",
    },
  };
});

const Step2CardStyles = styled(BasicCardStyles)(({ theme }) => {
  const bgColor = "#ffbb00";

  return {
    color: "#fff",
    backgroundColor: bgColor,

    "&:after": {
      backgroundImage: `
        linear-gradient(to right, ${bgColor} 12%, transparent 25% 55%, ${bgColor} 88%), 
        linear-gradient(to top, ${bgColor} 35%, transparent 45%)
      `,
    },

    "& img": {
      gridRow: "1 / 2",
      objectFit: "cover",
      objectPosition: "center -14px",
      minHeight: 300,
      transform: "scale(.75)",
      transformOrigin: "top",
    },
  };
});

const Step3CardStyles = styled(BasicCardStyles)(({ theme }) => {
  const bgColor = "#fe9749";

  return {
    color: "#fff",
    backgroundColor: bgColor,

    "&:after": {
      backgroundImage: `linear-gradient(to top, ${bgColor} 15%, transparent 40%)`,
    },

    "& img": {
      objectFit: "cover",
      objectPosition: "-2px -5px",
    },
  };
});

const ListStyles = styled("div")(({ theme }) => {
  const itemSize = "min(310px, 100%)";

  return {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(1px, 1fr))`,
    justifyContent: "center",
    gridGap: theme.spacing(4.5),

    [theme.breakpoints.down(1094)]: {
      gridTemplateColumns: `minmax(${itemSize}, 476px)`,
      gridGap: theme.spacing(2.5),
    },
  };
});

const SectionStyles = styled("div")(({ theme }) => {
  return {
    backgroundColor: "#F4F4F4",
    padding: theme.spacing(8, 0),

    [theme.breakpoints.down("lg")]: {
      margin: theme.spacing(7, 0),
    },

    "& .MuiContainer-root": {
      display: "flex",
      flexFlow: "column nowrap",
    },
  };
});

//Component
export const HomePromoSection = (props: HomePromoSectionProps) => {
  return (
    <SectionStyles {...props}>
      <Container>
        <TitlePrimaryStyles>Less Stress. More Success.</TitlePrimaryStyles>
        <TitleSecondaryStyles>
          As recovering marketers, we feel your pain. The solution of our{" "}
          <strong>team + technology </strong>has helped over 500 companies break
          through internal roadblocks to create breakthrough marketing content.
        </TitleSecondaryStyles>
        <ListStyles>
          <Step1CardStyles>
            <Image src={laptopImage} alt="" fill sizes="750px" quality={100} />
            <CardBodyStyles>
              <CardStepTitleStyles>Step 1</CardStepTitleStyles>
              <CardTitleStyles>
                Create your Media Shower account
              </CardTitleStyles>
            </CardBodyStyles>
          </Step1CardStyles>
          <Step2CardStyles>
            <Image src={girlImage} alt="" fill sizes="750px" quality={100} />
            <CardBodyStyles>
              <CardStepTitleStyles>Step 2</CardStepTitleStyles>
              <CardTitleStyles>Kick off your brand</CardTitleStyles>
            </CardBodyStyles>
          </Step2CardStyles>
          <Step3CardStyles>
            <Image src={mouseImage} alt="" fill sizes="750px" quality={100} />
            <CardBodyStyles>
              <CardStepTitleStyles>Step 3</CardStepTitleStyles>
              <CardTitleStyles>Point, click, and order</CardTitleStyles>
            </CardBodyStyles>
          </Step3CardStyles>
        </ListStyles>
      </Container>
    </SectionStyles>
  );
};
