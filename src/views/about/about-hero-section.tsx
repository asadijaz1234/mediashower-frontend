import Image from "next/image";
import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Container from "@mui/material/Container";

import contentImage from "~/assets/images/about-page/about-content.jpg";
import trainingImage from "~/assets/images/about-page/about-training.jpg";
import resultsImage from "~/assets/images/about-page/about-results.jpg";

//Interfaces
export interface AboutHeroSectionProps {}

//Styles
const TitleStyles = styled(
  (props: TypographyProps) => <Typography variant="h2" {...props} />,
  {
    target: "AboutHeroSection-title",
  }
)(({ theme }) => {
  return {
    lineHeight: 1.3,
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(-2),

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.pxToRem(38),
    },
  };
});

const TextStyles = styled((props: TypographyProps) => (
  <Typography variant="h6" {...props} />
))(({ theme }) => {
  return {
    lineHeight: 1.3,

    "&:not(:last-of-type)": {
      marginBottom: theme.spacing(2.5),
    },

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.pxToRem(16),
    },
  };
});

const ContentStyles = styled("div", {
  target: "AboutHeroSection-content",
})(({ theme }) => {
  return {};
});

const ImageStyles = styled(Image, {
  target: "AboutHeroSection-image",
})(({ theme }) => {
  return {};
});

const BaseSectionStyles = styled("section")(({ theme }) => {
  return {
    display: "flex",
    minHeight: 668,

    "& .MuiContainer-root": {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      alignItems: "center",
      justifyContent: "start",
      overflow: "hidden",

      "&::after": {
        position: "absolute",
        content: '""',
        gridRow: "1 / -1",
        gridColumn: "1 / -1",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1,
      },

      "& .AboutHeroSection-content": {
        maxWidth: 512,
      },
    },
  };
});

const ContentSectionStyles = styled(BaseSectionStyles)(({ theme }) => {
  const bgColor = "#fdcd38";

  return {
    backgroundColor: bgColor,

    "& .MuiContainer-root": {
      "&::after": {
        transform: "translateX(38px)",
        backgroundImage: `
          linear-gradient(to left, ${bgColor} 1%, transparent 6% 55%, ${bgColor} 65%)
        `,
      },

      "& .AboutHeroSection-content": {
        gridRow: "1 / -1",
        gridColumn: "1 / 2",
        transform: "translateX(134px)",
        zIndex: 2,
      },

      "& .AboutHeroSection-image": {
        objectFit: "contain",
        objectPosition: "right bottom",
        gridRow: "1 / -1",
        gridColumn: "1 / -1",
        transform: "translateX(38px)",
        zIndex: 0,
      },
    },

    [theme.breakpoints.down("xl")]: {
      minHeight: "auto",

      "& .MuiContainer-root": {
        "& .AboutHeroSection-content": {
          gridColumn: "1 / -1",
          justifySelft: "start",
          margin: theme.spacing(6, 0),
          transform: "none",
        },

        "& .AboutHeroSection-image": {},
      },
    },

    [theme.breakpoints.down("lg")]: {
      "& .MuiContainer-root": {
        "& .AboutHeroSection-content": {
          maxWidth: 380,
        },
        "& .AboutHeroSection-image": {
          transform: "translateX(52px)",
        },
      },
    },

    [theme.breakpoints.down(864)]: {
      "& .MuiContainer-root": {
        gridTemplateRows: "1fr 464px",

        "&::after": {
          gridRow: "2 / -1",
          transform: "none",
          backgroundImage: `
            linear-gradient(to bottom, ${bgColor} 1%, transparent 8%),
            linear-gradient(to right, ${bgColor} 2%, transparent 20% 80%, ${bgColor} 90%)
          `,
        },

        "& .AboutHeroSection-content": {
          gridRow: "1 / 2",
          margin: theme.spacing(8, 0, 2, 0),
          maxWidth: "none",
        },

        "& .AboutHeroSection-image": {
          gridRow: "2/-1",
          gridColumn: "1 / -1",
          objectFit: "cover",
          objectPosition: "calc(50% - 84px) top",
          transform: "none",
        },
      },
    },

    [theme.breakpoints.down("sm")]: {
      "& .MuiContainer-root": {
        gridTemplateRows: "1fr 292px",

        "&::after": {
          backgroundImage: `
            linear-gradient(to bottom, ${bgColor} 1%, transparent 8%),
            linear-gradient(to right, ${bgColor} 1%, transparent 10% 80%, ${bgColor} 88%)
          `,
        },

        "& .AboutHeroSection-image": {
          objectPosition: "calc(50% - 64px) top",
        },
      },
    },
  };
});

const TrainingSectionStyles = styled(BaseSectionStyles)(({ theme }) => {
  const bgColor = "#dbbf9f";

  return {
    backgroundColor: bgColor,

    "& .AboutHeroSection-title": {
      marginTop: theme.spacing(-4.5),
    },

    "& .MuiContainer-root": {
      "&::after": {
        transform: "translateX(-40px)",
        backgroundImage: `
          linear-gradient(to right, ${bgColor} 2%, transparent 6% 52%, ${bgColor} 62%)
        `,
      },

      "& .AboutHeroSection-content": {
        gridRow: "1 / -1",
        gridColumn: "2 / 3",
        transform: "translateX(38px)",
        zIndex: 2,
      },

      "& .AboutHeroSection-image": {
        objectFit: "contain",
        objectPosition: "left bottom",
        gridRow: "1 / -1",
        gridColumn: "1 / -1",
        transform: "translateX(-40px)",
        zIndex: 0,
      },
    },

    [theme.breakpoints.down("xl")]: {
      minHeight: "auto",

      "& .AboutHeroSection-title": {
        marginTop: theme.spacing(0),
      },

      "& .MuiContainer-root": {
        "& .AboutHeroSection-content": {
          gridColumn: "1 / -1",
          margin: theme.spacing(6, 0),
          transform: "none",
          justifySelf: "end",
        },

        "& .AboutHeroSection-image": {},
      },
    },

    [theme.breakpoints.down("lg")]: {
      "& .MuiContainer-root": {
        "&::after": {
          transform: "translateX(-56px)",
          backgroundImage: `
            linear-gradient(to right, ${bgColor} 2%, transparent 6% 40%, ${bgColor} 60%)
          `,
        },

        "& .AboutHeroSection-content": {
          maxWidth: 380,
        },
        "& .AboutHeroSection-image": {
          transform: "translateX(-56px)",
        },
      },
    },

    [theme.breakpoints.down(864)]: {
      "& .MuiContainer-root": {
        gridTemplateRows: "1fr 464px",

        "&::after": {
          gridRow: "2 / -1",
          transform: "none",
          backgroundImage: `
            linear-gradient(to bottom, ${bgColor} 1%, transparent 8%),
            linear-gradient(to right, ${bgColor} 1%, transparent 10% 90%, ${bgColor} 99%)
          `,
        },

        "& .AboutHeroSection-content": {
          gridRow: "1 / 2",
          margin: theme.spacing(8, 0, 2, 0),
          maxWidth: "none",
        },

        "& .AboutHeroSection-image": {
          gridRow: "2/-1",
          gridColumn: "1 / -1",
          objectFit: "cover",
          objectPosition: "center top",
          transform: "none",
        },
      },
    },

    [theme.breakpoints.down("sm")]: {
      "& .MuiContainer-root": {
        gridTemplateRows: "1fr 292px",

        "& .AboutHeroSection-image": {
          objectPosition: "calc(50%) top",
        },
      },
    },
  };
});

const ResultsSectionStyles = styled(BaseSectionStyles)(({ theme }) => {
  const bgColor = "#fcc336";

  return {
    backgroundColor: bgColor,

    "& .MuiContainer-root": {
      "&::after": {
        transform: "translateX(38px)",
        backgroundImage: `
          linear-gradient(to left, ${bgColor} 1%, transparent 19% 50%, ${bgColor}  65%)
        `,
      },

      "& .AboutHeroSection-content": {
        gridRow: "1 / -1",
        gridColumn: "1 / 2",
        transform: "translateX(134px)",
        zIndex: 2,
      },

      "& .AboutHeroSection-image": {
        objectFit: "contain",
        objectPosition: "right bottom",
        gridRow: "1 / -1",
        gridColumn: "1 / -1",
        transform: "translateX(38px)",
        zIndex: 0,
      },
    },

    [theme.breakpoints.down("xl")]: {
      minHeight: "auto",

      "& .MuiContainer-root": {
        "& .AboutHeroSection-content": {
          gridColumn: "1 / -1",
          margin: theme.spacing(6, 0),
          transform: "none",
          justifySelf: "start",
        },

        "& .AboutHeroSection-image": {
          objectPosition: "300px bottom",
        },
      },
    },

    [theme.breakpoints.down("lg")]: {
      "& .MuiContainer-root": {
        "& .AboutHeroSection-content": {
          maxWidth: 380,
        },
        "& .AboutHeroSection-image": {
          objectPosition: "right bottom",
          transform: "translateX(150px)",
        },
      },
    },

    [theme.breakpoints.down(864)]: {
      "& .MuiContainer-root": {
        gridTemplateRows: "1fr 464px",

        "&::after": {
          gridRow: "2 / -1",
          transform: "none",
          backgroundImage: `
            linear-gradient(to bottom, ${bgColor} 1%, transparent 8%),
            linear-gradient(to right, ${bgColor} 1%, transparent 10% 75%, ${bgColor} 99%)
          `,
        },

        "& .AboutHeroSection-content": {
          gridRow: "1 / 2",
          margin: theme.spacing(8, 0, 2, 0),
          maxWidth: "none",
        },

        "& .AboutHeroSection-image": {
          gridRow: "2/-1",
          gridColumn: "1 / -1",
          objectFit: "cover",
          objectPosition: "center calc(50%)",
          transform: "none",
        },
      },
    },

    [theme.breakpoints.down("sm")]: {
      "& .MuiContainer-root": {
        gridTemplateRows: "1fr 292px",

        "&::after": {
          gridRow: "2 / -1",
          transform: "none",
          backgroundImage: `
            linear-gradient(to bottom, ${bgColor} 1%, transparent 8%),
            linear-gradient(to right, ${bgColor} 1%, transparent 12% 70%, ${bgColor} 99%)
          `,
        },

        "& .AboutHeroSection-image": {
          objectPosition: "calc(50% - 10px) calc(50%)",
        },
      },
    },
  };
});

//Component
export const AboutHeroSection = () => {
  return (
    <>
      <ContentSectionStyles>
        <Container maxWidth="xxl">
          <ImageStyles
            src={contentImage}
            alt="Content"
            priority
            fill
            quality={92}
          />
          <ContentStyles>
            <TitleStyles>
              Better Content <br /> for a Better World.
            </TitleStyles>
            <TextStyles>
              Our belief is that{" "}
              <strong>better businesses can build a better world</strong>.
            </TextStyles>
            <TextStyles>
              “Better” is not just our tagline. It’s in our DNA. (Also, it’s on
              our T-shirts.)
            </TextStyles>
            <TextStyles>
              Throughout history, great companies have challenged their
              employees to embrace continual improvement. That commitment to
              “better” isn’t just good for the company; it’s good for the
              customers.
            </TextStyles>
            <TextStyles>
              We see this drive to “get better” as a flywheel that drives
              everything forward, so that everyone – employees and clients alike
              – grow and thrive.
            </TextStyles>
          </ContentStyles>
        </Container>
      </ContentSectionStyles>
      <TrainingSectionStyles>
        <Container maxWidth="xxl">
          <ImageStyles src={trainingImage} alt="Training" fill quality={92} />
          <ContentStyles>
            <TitleStyles>
              Better Training <br /> Makes Better Teams.
            </TitleStyles>
            <TextStyles>
              Founded by two friends at the dawn of the Web, Media Shower has
              grown to serve over 500 happy clients with over 100,000 successful
              marketing projects.
            </TextStyles>
            <TextStyles>And we continue to get better.</TextStyles>
            <TextStyles>
              Since the beginning, we have been a remote-first company. Our
              full-time team oversees modular teams of top-tier talent, and we
              invest heavily in continual training on marketing best practices.
              (As a client, you get access to this training, too.)
            </TextStyles>
            <TextStyles>
              Why? Because <strong>better marketing matters.</strong>
            </TextStyles>
          </ContentStyles>
        </Container>
      </TrainingSectionStyles>
      <ResultsSectionStyles>
        <Container maxWidth="xxl">
          <ImageStyles src={resultsImage} alt="Results" fill quality={100} />
          <ContentStyles>
            <TitleStyles>
              Better Values Drive <br /> Better Results.
            </TitleStyles>
            <TextStyles>
              In a world where the cruelest tweet or the scariest headline get
              the most attention, <strong>positive marketing</strong> – aligned
              with the great human character strengths –{" "}
              <strong>matters more than ever</strong>.
            </TextStyles>
            <TextStyles>
              Our five founding values (quality, honesty, continual improvement,
              discipline, and agility) are not just words on a wall; they weave
              through our work.
            </TextStyles>
            <TextStyles>
              That’s why you won’t find negative headlines. You won’t find
              clickbait. You won’t find short-term solutions that harm your
              brand in the long run.
            </TextStyles>
            <TextStyles>
              Instead, you’ll find a team that makes your business better. And{" "}
              <strong>better businesses lead to a better world</strong>.
            </TextStyles>
            <TextStyles>
              We hope you’ll join us, and get better soon.
            </TextStyles>
          </ContentStyles>
        </Container>
      </ResultsSectionStyles>
    </>
  );
};
