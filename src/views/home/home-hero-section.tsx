"use client";

import React, { useState, useCallback, useEffect } from "react";

import Image, { ImageProps } from "next/image";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { PlayerDialog } from "~/components/player-dialog";

import defaultImage from "~/assets/images/home/hero-default.jpeg";
import image1 from "~/assets/images/home/marketing_manager_with_a_laptop.jpeg";
import image2 from "~/assets/images/home/pointing-marketing-manager.jpeg";
import image3 from "~/assets/images/home/smiling_male_marketing_manager_with_arms_crossed.jpeg";
import image4 from "~/assets/images/home/smiling_marketing_manager_with_glasses.jpeg";
import image5 from "~/assets/images/home/smiling-marketing-manager.jpeg";
import image6 from "~/assets/images/home/smlining_arms_crossed_marketing_manager.jpg";
import { updateHeroActiveIndex } from "~/app/actions";

//Interfaces
export interface HomeHeroSectionProps extends React.ComponentPropsWithoutRef<"div"> {
  activeIndex?: number;
}

//Styles
const TitlePrimaryStyles = styled((props: TypographyProps) => <Typography variant="h2" {...props} />, {
  target: "HomeHero-title",
})(({ theme }) => {
  return {
    color: "inherit",
    marginBottom: theme.spacing(3),

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.pxToRem(35),
      marginBottom: theme.spacing(2.3),
    },
  };
});

const TitleSecondaryStyles = styled((props: TypographyProps) => <Typography variant="h6" {...props} />, {
  target: "HomeHero-subtitle",
})(({ theme }) => {
  return {
    color: "inherit",
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: 1.4,
    marginBottom: theme.spacing(3),
    width: "100%",
    maxWidth: 504,

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.pxToRem(17),
      lineHeight: 1.3,
      marginBottom: theme.spacing(2.5),
    },
  };
});

const ContentStyles = styled("div", {
  target: "HomeHero-content",
})(({ theme }) => {
  return {
    position: "relative",
    color: theme.palette.common.white,
    padding: theme.spacing(4, 0),
    maxWidth: 536,
    gridColumn: "2 / -1",
    zIndex: 1,

    [theme.breakpoints.down("lg")]: {
      maxWidth: 392,
    },

    [theme.breakpoints.down("md")]: {
      gridColumn: "1 / -1",
      padding: theme.spacing(8, 0, 0, 0),
    },
  };
});

const ImageStyles = styled(
  (props: Partial<ImageProps>) => (
    <Image {...(props as ImageProps)} alt="Hero" priority fill sizes="(max-width: 990px) 828px, 1200px" />
  ),
  {
    target: "HomeHero-image",
  }
)(({ theme }) => {
  return {};
});

const BasicSectionStyles = styled("div", {
  target: "HomeHero-section",
})(({ theme }) => {
  return {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "stretch",
    minHeight: 668,
    overflow: "hidden",

    [theme.breakpoints.down("lg")]: {
      minHeight: 400,
    },

    "& .MuiContainer-root": {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      justifyContent: "end",
      alignItems: "center",

      [theme.breakpoints.down("md")]: {
        gridTemplateRows: "1fr 500px",
        gridTemplateColumns: "1fr",
      },

      "&:after": {
        content: "''",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0,

        [theme.breakpoints.down("lg")]: {
          gridColumn: "1 / 2",
        },

        [theme.breakpoints.down("md")]: {
          gridColumn: "1 / -1",
        },
      },
    },

    "& .HomeHero-image": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
      opacity: 1,

      [theme.breakpoints.down("lg")]: {
        gridColumn: "1 / 2",
      },

      [theme.breakpoints.down("md")]: {
        gridRow: "2 / -1",
        gridColumn: "1 / -1",
      },
    },

    "& .MuiButton-root": {
      minWidth: 164,
    },
  };
});

const Section0Styles = styled(BasicSectionStyles)(({ theme }) => {
  const bgColor = "#3b73a2";

  return {
    backgroundColor: bgColor,

    "& .MuiContainer-root": {
      "&:after": {
        backgroundImage: `linear-gradient(to right, ${bgColor} 0%, transparent 3% 50%, ${bgColor} 60%)`,

        [theme.breakpoints.down("lg")]: {
          backgroundImage: `linear-gradient(to right, ${bgColor} 5% , transparent 10%), linear-gradient(to left, ${bgColor} 5%, transparent 25%)`,
        },

        [theme.breakpoints.down("md")]: {
          backgroundImage: `linear-gradient(to bottom, ${bgColor} 30%, transparent 42%)`,
        },
      },
    },

    "& .HomeHero-image": {
      objectFit: "contain",
      objectPosition: "-122px bottom",

      [theme.breakpoints.down("lg")]: {
        objectFit: "cover",
        objectPosition: "25% bottom",
      },

      [theme.breakpoints.down("md")]: {
        objectFit: "cover",
        objectPosition: "28% bottom",
        transform: "scale(1.1)",
        transformOrigin: "bottom center",
      },
    },
  };
});

const Section1Styles = styled(BasicSectionStyles)(({ theme }) => {
  const bgColor = "#d74864";

  return {
    backgroundColor: bgColor,

    "& .MuiContainer-root": {
      "&:after": {
        backgroundImage: `linear-gradient(to right, ${bgColor} 0%, transparent 3% 50%, ${bgColor} 60%)`,

        [theme.breakpoints.down("lg")]: {
          backgroundImage: `linear-gradient(to right, ${bgColor} 5% , transparent 10%), linear-gradient(to left, ${bgColor} 5%, transparent 25%)`,
        },

        [theme.breakpoints.down("md")]: {
          backgroundImage: `linear-gradient(to bottom, ${bgColor} 30%, transparent 42%)`,
        },
      },
    },

    "& .HomeHero-image": {
      objectFit: "contain",
      objectPosition: "-24px bottom",

      [theme.breakpoints.down("lg")]: {
        objectFit: "cover",
        objectPosition: "0 bottom",
      },

      [theme.breakpoints.down("md")]: {
        objectFit: "cover",
        objectPosition: "calc(40% + 108px) top",
        transform: "scale(1.1)",
        transformOrigin: "bottom center",
      },
    },
  };
});

const Section2Styles = styled(BasicSectionStyles)(({ theme }) => {
  const bgColor = "#fdba35";

  return {
    backgroundColor: bgColor,

    "& .MuiContainer-root": {
      "&:after": {
        backgroundImage: `linear-gradient(to right, ${bgColor} 0%, transparent 3% 50%, ${bgColor} 60%)`,

        [theme.breakpoints.down("lg")]: {
          backgroundImage: `linear-gradient(to right, ${bgColor} 5% , transparent 10%), linear-gradient(to left, ${bgColor} 5%, transparent 25%)`,
        },

        [theme.breakpoints.down("md")]: {
          backgroundImage: `linear-gradient(to right, ${bgColor}, transparent 20%), linear-gradient(to bottom, ${bgColor} 30%, transparent 45%)`,
        },
      },
    },

    "& .HomeHero-image": {
      objectFit: "contain",
      objectPosition: "-24px bottom",

      [theme.breakpoints.down("lg")]: {
        objectFit: "cover",
        objectPosition: "28px bottom",
      },

      [theme.breakpoints.down("md")]: {
        objectPosition: "calc(43% + 156px) top",
      },
    },

    "& .MuiButton-root": {
      backgroundColor: theme.palette.primary.main,
    },
  };
});

const Section3Styles = styled(BasicSectionStyles)(({ theme }) => {
  const bgColor = "#81cadf";

  return {
    backgroundColor: bgColor,

    "& .MuiContainer-root": {
      "&:after": {
        backgroundImage: `linear-gradient(to right, ${bgColor} 0%, transparent 7% 50%, ${bgColor} 60%)`,

        [theme.breakpoints.down("lg")]: {
          backgroundImage: `linear-gradient(to right, ${bgColor} 5% , transparent 10%), linear-gradient(to left, ${bgColor} 5%, transparent 25%)`,
        },

        [theme.breakpoints.down("md")]: {
          backgroundImage: `linear-gradient(to right, ${bgColor}, transparent 10% 90%, ${bgColor}), linear-gradient(to bottom, ${bgColor} 30%, transparent 45%)`,
        },
      },
    },

    "& .HomeHero-image": {
      objectFit: "contain",
      objectPosition: "-24px bottom",

      [theme.breakpoints.down("lg")]: {
        objectFit: "cover",
        objectPosition: "8px bottom",
      },

      [theme.breakpoints.down("md")]: {
        objectPosition: "calc(40% + 117px) top",
      },
    },
  };
});

const Section4Styles = styled(BasicSectionStyles)(({ theme }) => {
  const bgColor = "#fbc449";

  return {
    backgroundColor: bgColor,

    "& .MuiContainer-root": {
      "&:after": {
        backgroundImage: `linear-gradient(to right, ${bgColor} 0%, transparent 7% 50%, ${bgColor} 60%)`,

        [theme.breakpoints.down("lg")]: {
          backgroundImage: `linear-gradient(to right, ${bgColor} 5% , transparent 10%), linear-gradient(to left, ${bgColor} 5%, transparent 25%)`,
        },

        [theme.breakpoints.down("md")]: {
          backgroundImage: `linear-gradient(to right, ${bgColor}, transparent 10% 90%, ${bgColor}), linear-gradient(to bottom, ${bgColor} 30%, transparent 45%)`,
        },
      },
    },

    "& .HomeHero-image": {
      objectFit: "contain",
      objectPosition: "0 bottom",

      [theme.breakpoints.down("lg")]: {
        objectFit: "cover",
        objectPosition: "30px bottom",
      },

      [theme.breakpoints.down("md")]: {
        objectPosition: "calc(40% + 164px) top",
      },
    },

    "& .MuiButton-root": {
      backgroundColor: "#9a8729",
    },
  };
});

const Section5Styles = styled(BasicSectionStyles)(({ theme }) => {
  const bgColor = "#dae2c4";

  return {
    backgroundColor: bgColor,

    "& .MuiContainer-root": {
      "&:after": {
        backgroundImage: `linear-gradient(to right, $ transparent 0% 75%, ${bgColor})`,

        [theme.breakpoints.down("lg")]: {
          backgroundImage: `linear-gradient(to right, ${bgColor} 5% , transparent 10%), linear-gradient(to left, ${bgColor} 5%, transparent 25%)`,
        },

        [theme.breakpoints.down("md")]: {
          backgroundImage: `linear-gradient(to right, ${bgColor}, transparent 10% 90%, ${bgColor}), linear-gradient(to bottom, ${bgColor} 38%, transparent 42%)`,
        },
      },
    },

    "& .HomeHero-content": {
      color: "#29180c",
    },

    "& .HomeHero-image": {
      objectFit: "contain",
      objectPosition: "0 bottom",

      [theme.breakpoints.down("lg")]: {
        objectFit: "cover",
        objectPosition: "30px bottom",
      },

      [theme.breakpoints.down("md")]: {
        objectPosition: "calc(40% + 116px) top",
      },
    },

    "& .MuiButton-root": {
      backgroundColor: "#6c443b",
    },
  };
});

const Section6Styles = styled(BasicSectionStyles)(({ theme }) => {
  const bgColor = "#cdcdcf";

  return {
    backgroundColor: bgColor,

    "& .MuiContainer-root": {
      "&:after": {
        backgroundImage: `linear-gradient(to right, $ transparent 0% 75%, ${bgColor})`,

        [theme.breakpoints.down("lg")]: {
          backgroundImage: `linear-gradient(to right, ${bgColor} 5% , transparent 10%), linear-gradient(to left, ${bgColor} 5%, transparent 25%)`,
        },

        [theme.breakpoints.down("md")]: {
          backgroundImage: `linear-gradient(to right, ${bgColor}, transparent 10% 90%, ${bgColor}), linear-gradient(to bottom, ${bgColor} 38%, transparent 42%)`,
        },
      },
    },

    "& .HomeHero-content": {
      color: theme.palette.text.primary,
    },

    "& .HomeHero-image": {
      objectFit: "contain",
      objectPosition: "0 bottom",

      [theme.breakpoints.down("lg")]: {
        objectFit: "cover",
        objectPosition: "54px bottom",
      },

      [theme.breakpoints.down("md")]: {
        objectPosition: "calc(41% + 167px) top",
      },
    },
  };
});

// Helpers
const COMPONENTS: Record<number, { image: React.ReactElement; Section: React.ElementType }> = {
  0: {
    image: <ImageStyles src={defaultImage} quality={85} />,
    Section: Section0Styles,
  },
  1: {
    image: <ImageStyles src={image1} quality={90} />,
    Section: Section1Styles,
  },
  2: {
    image: <ImageStyles src={image2} quality={90} />,
    Section: Section2Styles,
  },
  3: {
    image: <ImageStyles src={image3} quality={85} />,
    Section: Section3Styles,
  },
  4: {
    image: <ImageStyles src={image4} quality={80} />,
    Section: Section4Styles,
  },
  5: {
    image: <ImageStyles src={image5} quality={90} />,
    Section: Section5Styles,
  },
  6: {
    image: <ImageStyles src={image6} quality={90} />,
    Section: Section6Styles,
  },
};

//Component
export const HomeHeroSection = (props: HomeHeroSectionProps) => {
  const { activeIndex = 0 } = props;

  const [openPlayerDialog, setOpenPlayerDialog] = useState(false);

  const handleOpenPlayerDialog = useCallback(() => {
    setOpenPlayerDialog(true);
  }, []);

  const handleClosePlayerDialog = useCallback(() => {
    setOpenPlayerDialog(false);
  }, []);

  // Render
  const ActiveComponent = COMPONENTS[activeIndex] || COMPONENTS[0];

  return (
    <>
      <PlayerDialog
        open={openPlayerDialog}
        PlayerProps={{
          url: "https://youtu.be/DxIkDryfcYI",
          playing: true,
          width: "100%",
          height: "100%",
        }}
        onClose={handleClosePlayerDialog}
      />

      <ActiveComponent.Section>
        <Container>
          {ActiveComponent.image}
          <ContentStyles>
            <TitlePrimaryStyles>
              The Better Way <br />
              to Get Marketing Done.
            </TitlePrimaryStyles>
            <TitleSecondaryStyles>
              We&apos;re the all-in-one platform that helps you produce <strong>better marketing content</strong> to
              drive <strong>better marketing results.</strong>
            </TitleSecondaryStyles>
            <Button color="secondary" onClick={handleOpenPlayerDialog}>
              Watch the video
            </Button>
          </ContentStyles>
        </Container>
      </ActiveComponent.Section>
    </>
  );
};
