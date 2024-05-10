import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography, { TypographyProps } from "@mui/material/Typography";

import { PlayerSection } from "~/components/player-section";

//Interfaces
export interface PlatformInActionSectionProps extends React.ComponentPropsWithoutRef<"section"> {}

//Styles
const TitlePrimaryStyles = styled((props: TypographyProps) => <Typography variant="h4" {...props} />)(({ theme }) => {
  return {
    marginBottom: theme.spacing(2.75),
    lineHeight: 1.1,

    [theme.breakpoints.down("lg")]: {
      fontSize: 32,
      marginBottom: theme.spacing(2),
    },

    [theme.breakpoints.down("md")]: {
      fontSize: 30,
    },
  };
});

const TitleSecondaryStyles = styled((props: TypographyProps<"div">) => (
  <Typography variant="body1" component="div" {...props} />
))(({ theme }) => {
  return {
    [theme.breakpoints.down("lg")]: {
      lineHeight: 1.2,
    },
  };
});

const ContentStyles = styled("div", {
  target: "PlatformInActionContent-root",
})(({ theme }) => {
  return {
    maxWidth: 440,
  };
});

const PlayerStyles = styled(PlayerSection, {
  target: "PlatformInActionPlayer-root",
})(({ theme }) => {
  return {
    minHeight: 274,
  };
});

const SectionStyles = styled("section")(({ theme }) => {
  return {
    margin: theme.spacing(9, 0),

    "& .MuiContainer-root": {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "minmax(min-content, 521px) 1fr",
      alignItems: "center",

      "& .PlatformInActionPlayer-root": {
        gridColumn: "1 / 2",
        alignSelf: "start",
      },

      "& .PlatformInActionContent-root": {
        gridColumn: "2 / -1",
        marginLeft: 109,
      },
    },

    [theme.breakpoints.down("xl-dense")]: {
      "& .MuiContainer-root": {
        "& .PlatformInActionContent-root": {
          marginLeft: theme.spacing(8),
        },
      },
    },

    [theme.breakpoints.down("lg")]: {
      margin: theme.spacing(8, 0),

      "& .MuiContainer-root": {
        gridTemplateColumns: "min(100%, 532px)",
        gridTemplateRows: "min-content 1fr",
        gridGap: 30,
        justifyContent: "center",

        "& .PlatformInActionPlayer-root": {
          gridColumn: "1 / -1",
          gridRow: "1 / 2",
        },

        "& .PlatformInActionPlayer-image": {
          objectFit: "cover",
          objectPosition: "center top",
        },

        "& .PlatformInActionContent-root": {
          gridColumn: "1 / -1",
          gridRow: "2 / -1",
          marginLeft: theme.spacing(3),
          maxWidth: 460,
        },
      },
    },

    [theme.breakpoints.down("sm")]: {
      "& .MuiContainer-root": {
        "& .PlatformInActionContent-root": {
          marginLeft: 0,
        },
      },
    },

    [theme.breakpoints.down("sm-dense")]: {
      "& .MuiContainer-root": {
        gridTemplateColumns: "min(100%, 356px)",

        "& .PlatformInActionPlayer-root": {
          minHeight: 184,
        },
      },
    },
  };
});

//Component
export const PlatformInActionSection = (props: PlatformInActionSectionProps) => {
  return (
    <SectionStyles {...props}>
      <Container>
        <PlayerStyles
          PlayerProps={{
            url: "https://youtu.be/WFNEEw2bSQY",
            // light: "/images/platform-in-action.jpg",
          }}
        />

        <ContentStyles>
          <TitlePrimaryStyles>See the Platform in Action.</TitlePrimaryStyles>
          <TitleSecondaryStyles>
            Manage random requests. Develop half-baked ideas. Polish, perfect, and publish. All from one place.
          </TitleSecondaryStyles>
        </ContentStyles>
      </Container>
    </SectionStyles>
  );
};
