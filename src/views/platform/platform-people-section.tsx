import Image from "next/image";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography, { TypographyProps } from "@mui/material/Typography";

//Interfaces
export interface PlatformPeopleSectionProps
  extends React.ComponentPropsWithoutRef<"section"> {}

//Styles
const TitlePrimaryStyles = styled((props: TypographyProps) => (
  <Typography variant="h4" {...props} />
))(({ theme }) => {
  return {
    fontSize: 32,
    marginBottom: theme.spacing(2.75),
    lineHeight: 1.1,

    [theme.breakpoints.down("lg")]: {
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
    "& + &": {
      marginTop: theme.spacing(2),
    },

    [theme.breakpoints.down("lg")]: {
      lineHeight: 1.2,
    },
  };
});

const ContentStyles = styled("div", {
  target: "PlatformPeopleContent-root",
})(({ theme }) => {
  return {
    maxWidth: 480,
  };
});

const ImageStyles = styled(Image, {
  target: "PlatformPeopleImage-root",
})(({ theme }) => {
  return {
    objectFit: "cover",
    objectPosition: "center top",
  };
});

const ImageContainerStyles = styled("div", {
  target: "PlatformPeopleImageContainer-root",
})(({ theme }) => {
  return {
    position: "relative",
    minHeight: 274,
    backgroundColor: theme.palette.grey["150"],
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
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

      "& .PlatformPeopleImageContainer-root": {
        gridColumn: "1 / 2",
        alignSelf: "start",
      },

      "& .PlatformPeopleContent-root": {
        gridColumn: "2 / -1",
        marginLeft: 109,
      },
    },

    [theme.breakpoints.down("xl-dense")]: {
      "& .MuiContainer-root": {
        "& .PlatformPeopleContent-root": {
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

        "& .PlatformPeopleImageContainer-root": {
          gridColumn: "1 / -1",
          gridRow: "1 / 2",
        },

        "& .PlatformPeopleContent-root": {
          gridColumn: "1 / -1",
          gridRow: "2 / -1",
          marginLeft: theme.spacing(3),
          maxWidth: 460,
        },
      },
    },

    [theme.breakpoints.down("sm")]: {
      "& .MuiContainer-root": {
        "& .PlatformPeopleContent-root": {
          marginLeft: 0,
        },
      },
    },

    [theme.breakpoints.down("sm-dense")]: {
      "& .MuiContainer-root": {
        gridTemplateColumns: "min(100%, 356px)",

        "& .PlatformPeopleImageContainer-root": {
          minHeight: 232,
        },
      },
    },
  };
});

//Component
export const PlatformPeopleSection = (props: PlatformPeopleSectionProps) => {
  return (
    <SectionStyles {...props}>
      <Container>
        <ImageContainerStyles>
          <ImageStyles
            src="/images/platform-people.jpg"
            alt="Platform powered by people"
            sizes="1200px"
            fill
            quality={90}
          />
        </ImageContainerStyles>

        <ContentStyles>
          <TitlePrimaryStyles>A Platform Powered by People.</TitlePrimaryStyles>
          <TitleSecondaryStyles>
            You get a dedicated <strong>Content Manager</strong> to collaborate
            on strategy, generate ideas, and catch spinning plates.
          </TitleSecondaryStyles>
          <TitleSecondaryStyles>
            Plus, a hand-picked team of <strong>Content Creators</strong> to
            bring your marketing materials to life, on brand and on time.
          </TitleSecondaryStyles>
        </ContentStyles>
      </Container>
    </SectionStyles>
  );
};
