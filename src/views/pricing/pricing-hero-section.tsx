import Image from "next/image";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography, { TypographyProps } from "@mui/material/Typography";

import heroImage from "~/assets/images/pricing-page/pricing-hero.jpg";

//Interfaces
export interface PricingHeroSectionProps
  extends React.ComponentPropsWithoutRef<"section"> {}

//Styles
const TitleStyles = styled((props: TypographyProps) => (
  <Typography variant="h2" {...props} />
))(({ theme }) => {
  return {
    lineHeight: 1.3,
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(1),

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
  target: "PricingSection-content",
})(({ theme }) => {
  return {};
});

const ImageStyles = styled(Image, {
  target: "PricingSection-image",
})(({ theme }) => {
  return {};
});

export const SectionStyles = styled("section")(({ theme }) => {
  const bgColor = "#86bfe0";

  return {
    position: "relative",
    display: "flex",
    backgroundColor: bgColor,
    height: 668,
    overflow: "hidden",

    "& .MuiContainer-root": {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      alignItems: "center",
      justifyContent: "start",
      overflow: "hidden",

      "&::after": {
        content: "''",
        position: "absolute",
        gridColumn: "2 / -1",
        gridRow: "1 / -1",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundImage: `linear-gradient(to left, ${bgColor}, transparent 22% 76%, ${bgColor})`,
        zIndex: 1,
      },

      "& .PricingSection-image": {
        gridColumn: "2 / -1",
        gridRow: "1 / -1",
        objectFit: "cover",
        objectPosition: "calc(50% - 16px) bottom",
        zIndex: 1,
      },

      "& .PricingSection-content": {
        gridColumn: "1 / 2",
        gridRow: "1 / -1",
        maxWidth: 512,
        zIndex: 2,
      },
    },

    [theme.breakpoints.down("lg")]: {
      height: 520,

      "& .MuiContainer-root": {
        "& .PricingSection-content": {
          maxWidth: 446,
        },
      },
    },

    [theme.breakpoints.down("md")]: {
      height: "auto",

      "& .MuiContainer-root": {
        gridTemplateRows: "1fr 464px",

        "&::after": {
          gridColumn: "1 / -1",
          gridRow: "2 / -1",
          backgroundImage: `
            linear-gradient(to bottom, ${bgColor} 1%, transparent 8%), 
            linear-gradient(-140deg, ${bgColor} 10%, transparent 28%), 
            linear-gradient(to left, ${bgColor}, transparent 15% 85%, ${bgColor})
          `,
        },

        "& .PricingSection-image": {
          gridColumn: "1 / -1",
          gridRow: "2 / -1",
          objectPosition: "center top",
          minHeight: 420,
        },

        "& .PricingSection-content": {
          gridColumn: "1 / -1",
          gridRow: "1 / 2",
          margin: theme.spacing(8, 0, 0, 0),
        },
      },
    },

    [theme.breakpoints.down("sm")]: {
      "& .MuiContainer-root": {
        "&::after": {
          gridColumn: "1 / -1",
          gridRow: "2 / -1",
          backgroundImage: `
            linear-gradient(to bottom, ${bgColor} 1%, transparent 8%),
            linear-gradient(to left, ${bgColor}, transparent 15% 85%, ${bgColor})
          `,
        },
      },
    },
  };
});

//Component
export const PricingHeroSection = (props: PricingHeroSectionProps) => {
  return (
    <SectionStyles {...props}>
      <Container>
        <ImageStyles
          src={heroImage}
          alt="Pricing hero"
          priority
          fill
          sizes="(max-width: 660px) 828px, 1200px"
          quality={94}
        />
        <ContentStyles>
          <TitleStyles>
            Scale your team. <br />
            Without the salaries.
          </TitleStyles>
          <TextStyles>
            Writers. Editors. Designers. Videographers. Producers. You’d easily
            spend $250,000 in annual salaries for a full content studio.
          </TextStyles>
          <TextStyles sx={{ fontStyle: "italic" }}>
            But content is not your business.
          </TextStyles>
          <TextStyles>
            The Media Shower solution gives you a complete content team you can
            scale as your marketing team needs it, at a fraction of the cost.
          </TextStyles>
          <TextStyles>
            Creating a new video series? No problem. Need a sales nurture
            campaign? Bring it on. Our easy monthly pricing makes your budget
            transparent and predictable.
          </TextStyles>
        </ContentStyles>
      </Container>
    </SectionStyles>
  );
};
