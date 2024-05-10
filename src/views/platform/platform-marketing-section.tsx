import Image from "next/image";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Paper, { PaperProps } from "@mui/material/Paper";

import dashboardImage from "~/assets/images/dashboard-origin.jpg";
import tabletImage from "~/assets/images/tablet-origin.jpg";
import productionImage from "~/assets/images/production-wide-origin.jpg";

//Interfaces
export interface PlatformMarketingSectionProps
  extends React.ComponentPropsWithoutRef<"section"> {}

//Styles
const TitlePrimaryStyles = styled((props: TypographyProps) => (
  <Typography variant="h4" {...props} />
))(({ theme }) => {
  return {
    textAlign: "center",
    marginBottom: theme.spacing(2),

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.pxToRem(32),
      maxWidth: 380,
    },
  };
});

const TitleSecondaryStyles = styled((props: TypographyProps) => (
  <Typography variant="h6" {...props} />
))(({ theme }) => {
  return {
    textAlign: "center",
    marginBottom: theme.spacing(4),

    [theme.breakpoints.down("lg")]: {
      maxWidth: 458,
      fontSize: theme.typography.body1.fontSize,
    },
  };
});

const HeaderStyles = styled("header")(({ theme }) => {
  return {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "flex-start",

    [theme.breakpoints.down("lg")]: {
      margin: "0 auto",
    },
  };
});

const BasicCardStyles = styled((props: PaperProps) => (
  <Paper elevation={0} {...props} />
))(({ theme }) => {
  return {
    position: "relative",
    display: "grid",
    gridTemplateRows: "194px 1fr",
    gridTemplateColumns: "1fr",
    minHeight: 328,
    overflow: "hidden",

    "& img": {
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

    [theme.breakpoints.down("lg")]: {
      gridTemplateRows: "212px 1fr",
      minHeight: 364,
    },
  };
});

const CardBodyStyles = styled("div")(({ theme }) => {
  return {
    position: "relative",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    gridRow: "2 / -1",
    textAlign: "center",
    padding: theme.spacing(0, 3, 3.5, 3),
    zIndex: 1,
  };
});

const CardTitlePrimaryStyles = styled((props: TypographyProps) => (
  <Typography variant="h6" {...props} />
))(({ theme }) => {
  return {
    fontSize: theme.typography.pxToRem(19),
    fontWeight: theme.typography.fontWeightMedium,
    textAlign: "center",
    marginBottom: theme.spacing(1),
  };
});

const CardTitleSecondaryStyles = styled((props: TypographyProps) => (
  <Typography variant="body1" {...props} />
))(({ theme }) => {
  return {
    textAlign: "center",
    maxWidth: 242,
  };
});

const WorkflowCardStyles = styled(BasicCardStyles)(({ theme }) => {
  const bgColor = "#35DDF7";

  return {
    backgroundColor: bgColor,

    "& img": {
      gridRow: "1 / 2",
      objectFit: "cover",
      objectPosition: "left -60px",
      transform: "scale(.68)",
      transformOrigin: "left top",
      minHeight: 328,
      minWidth: 532,
    },

    "&:after": {
      backgroundImage: `
        linear-gradient(to right, transparent 300px, ${bgColor} 334px),
        linear-gradient(to bottom, transparent 166px, ${bgColor} 202px),
        linear-gradient(-188deg, transparent 154px, ${bgColor} 224px)
      `,
    },
  };
});

const CreatorsCardStyles = styled(BasicCardStyles)(({ theme }) => {
  const bgColor = "#8FDBDB";

  return {
    backgroundColor: bgColor,

    "& img": {
      gridRow: "1 / 2",
      objectFit: "cover",
      objectPosition: "left -52px",
      transform: "scale(.72)",
      transformOrigin: "left top",
      minHeight: 346,
      minWidth: 532,
    },

    "&::after": {
      backgroundImage: `
        linear-gradient(to right, transparent 282px, ${bgColor} 338px),
        linear-gradient(to top, ${bgColor} 35%, transparent 50%)
      `,
    },
  };
});

const DashboardCardStyles = styled(BasicCardStyles)(({ theme }) => {
  const bgColor = "#F4D3CE";

  return {
    backgroundColor: bgColor,

    "& img": {
      gridRow: "1 / 2",
      objectFit: "cover",
      objectPosition: "center -34px",
      transform: "scale(.61)",
      transformOrigin: "top",
      minHeight: 390,
    },

    "&:after": {
      gridRow: "1 / -1",
      backgroundImage: `
        linear-gradient(to top, ${bgColor} 35%, transparent 49%),
        linear-gradient(to right, ${bgColor} 20%, transparent 30% 70%, ${bgColor} 90%)
      `,
    },
  };
});

const ListStyles = styled("div")(({ theme }) => {
  const itemSize = "min(280px, 100%)";

  return {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(${itemSize}, 1fr))`,
    justifyContent: "center",
    gridGap: theme.spacing(4.5),

    [theme.breakpoints.down("xl-dense")]: {
      gridGap: theme.spacing(3),
    },

    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: `minmax(${itemSize}, 532px)`,
    },
  };
});

const SectionStyles = styled("div")(({ theme }) => {
  return {
    backgroundColor: theme.palette.grey["150"],
    padding: theme.spacing(10, 0),
    margin: theme.spacing(9, 0),

    [theme.breakpoints.down("lg")]: {
      margin: theme.spacing(8, 0),
      padding: theme.spacing(8, 0),
    },
  };
});

//Component
export const PlatformMarketingSection = (
  props: PlatformMarketingSectionProps
) => {
  return (
    <SectionStyles>
      <Container>
        <HeaderStyles>
          <TitlePrimaryStyles>
            Get Marketing Done. Without the Drama.
          </TitlePrimaryStyles>
          <TitleSecondaryStyles>
            Everything you need to quickly move marketing materials from concept
            to completion.
          </TitleSecondaryStyles>
        </HeaderStyles>
        <ListStyles>
          <WorkflowCardStyles>
            <Image
              src={tabletImage}
              alt="Point-and-click content workflow."
              fill
              sizes="828px"
              quality={100}
            />
            <CardBodyStyles>
              <CardTitlePrimaryStyles>
                Point-and-click content workflow.
              </CardTitlePrimaryStyles>
              <CardTitleSecondaryStyles>
                Easily produce blogs, sales brochures, newsletters, webinars,
                videos, and social media assets.
              </CardTitleSecondaryStyles>
            </CardBodyStyles>
          </WorkflowCardStyles>
          <CreatorsCardStyles>
            <Image
              src={productionImage}
              alt="Award-winning content creators."
              fill
              sizes="828px"
              quality={100}
            />
            <CardBodyStyles>
              <CardTitlePrimaryStyles>
                Award-winning content creators.
              </CardTitlePrimaryStyles>
              <CardTitleSecondaryStyles>
                Summon on-call editors, graphic designers, and video producers —
                as you need them.
              </CardTitleSecondaryStyles>
            </CardBodyStyles>
          </CreatorsCardStyles>
          <DashboardCardStyles>
            <Image
              src={dashboardImage}
              alt="Built-in reporting dashboard."
              fill
              sizes="828px"
              quality={100}
            />
            <CardBodyStyles>
              <CardTitlePrimaryStyles>
                Built-in reporting dashboard.
              </CardTitlePrimaryStyles>
              <CardTitleSecondaryStyles>
                Impress your boss by showing your marketing is driving more
                traffic, leads, and customers.
              </CardTitleSecondaryStyles>
            </CardBodyStyles>
          </DashboardCardStyles>
        </ListStyles>
      </Container>
    </SectionStyles>
  );
};
