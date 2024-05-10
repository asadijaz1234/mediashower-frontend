import NextLink from "next/link";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography, { TypographyProps } from "@mui/material/Typography";

import { PlayerSection } from "~/components/player-section";

//Interfaces
export interface HomeDemoSectionProps extends React.ComponentPropsWithoutRef<"div"> {}

//Styles
const TitlePrimaryStyles = styled((props: TypographyProps) => <Typography variant="h4" {...props} />)(({ theme }) => {
  return {
    marginBottom: theme.spacing(3),

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.pxToRem(32),
      marginBottom: theme.spacing(2),
    },

    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.pxToRem(28),
    },
  };
});

const TitleSecondaryStyles = styled((props: TypographyProps) => <Typography variant="body1" {...props} />)(
  ({ theme }) => {
    return {
      marginBottom: theme.spacing(3),
    };
  }
);

const ContentStyles = styled("div")(({ theme }) => {
  return {
    gridColumn: "2 / 3",
    width: "100%",

    [theme.breakpoints.down("md")]: {
      gridColumn: "1 / 1",
      gridRow: "2 / 3",
      maxWidth: 476,
    },
  };
});

const PlayerStyles = styled(PlayerSection)(({ theme }) => {
  return {
    maxWidth: 480,
    gridColumn: "1 / 2",

    [theme.breakpoints.down("md")]: {
      gridColumn: "1 / 1",
      gridRow: "1 / 2",
    },
  };
});

const SectionStyles = styled("div")(({ theme }) => {
  return {
    margin: theme.spacing(8, 0),

    [theme.breakpoints.down("lg")]: {
      margin: theme.spacing(7, 0),
    },

    "& .MuiContainer-root": {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      gridGap: theme.spacing(4),
      minHeight: 270,

      [theme.breakpoints.down("lg")]: {
        gridGap: theme.spacing(3),
      },

      [theme.breakpoints.down("md")]: {
        gridTemplateRows: "minmax(min-content, 270px) 1fr",
        gridTemplateColumns: "1fr",
        justifyItems: "center",
        minHeight: "auto",
      },

      [theme.breakpoints.down(488)]: {
        gridTemplateRows: "minmax(min-content, 208px) 1fr",
      },
    },

    "& .MuiButton-root": {
      minWidth: 160,
    },
  };
});

//Component
export const HomeDemoSection = (props: HomeDemoSectionProps) => {
  return (
    <SectionStyles>
      <Container>
        <PlayerStyles
          PlayerProps={{
            url: "https://youtu.be/WFNEEw2bSQY",
            // light: "/images/demo-preview.png",
          }}
        />
        <ContentStyles>
          <TitlePrimaryStyles>Get the 5-Minute Demo.</TitlePrimaryStyles>
          <TitleSecondaryStyles>
            Invest five minutes to learn more about our products, platform, and pricing – and see how Media Shower will
            help you create <strong>better marketing materials that everyone loves.</strong>
          </TitleSecondaryStyles>
          <Button color="secondary" href="/user/free_trial">
            Free trial
          </Button>
        </ContentStyles>
      </Container>
    </SectionStyles>
  );
};
