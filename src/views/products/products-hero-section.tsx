import Image from "next/image";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography, { TypographyProps } from "@mui/material/Typography";

import heroImage from "~/assets/images/products-page/products-hero.jpg";

//Interfaces
export interface ProductsHeroSectionProps
  extends React.ComponentPropsWithoutRef<"section"> {}

//Styles
const TitleStyles = styled((props: TypographyProps) => (
  <Typography variant="h2" {...props} />
))(({ theme }) => {
  return {
    lineHeight: 1.3,
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(-1.5),

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
      marginBottom: theme.spacing(3),
    },

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.pxToRem(16),
    },
  };
});

const ContentStyles = styled("div", {
  target: "ProductsSection-content",
})(({ theme }) => {
  return {};
});

const ImageStyles = styled(Image, {
  target: "ProductsSection-image",
})(({ theme }) => {
  return {};
});

export const SectionStyles = styled("section")(({ theme }) => {
  const bgColor = "#F9DB80";

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
        backgroundImage: `linear-gradient(to left, ${bgColor} 0px, transparent 64px 400px, ${bgColor})`,
        zIndex: 1,
      },

      "& .ProductsSection-image": {
        gridColumn: "2 / -1",
        gridRow: "1 / -1",
        objectFit: "cover",
        objectPosition: "-6px bottom",
        zIndex: 1,
      },

      "& .ProductsSection-content": {
        gridColumn: "1 / 2",
        gridRow: "1 / -1",
        maxWidth: 512,
        zIndex: 2,
      },
    },

    [theme.breakpoints.down("xl-dense")]: {
      "& .MuiContainer-root": {
        "&::after": {
          backgroundImage: `linear-gradient(to left, ${bgColor} 0px, transparent 20% 75%, ${bgColor})`,
        },

        "& .ProductsSection-image": {
          objectPosition: "center bottom",
        },
      },
    },

    [theme.breakpoints.down("lg")]: {
      height: 520,

      "& .MuiContainer-root": {
        "& .ProductsSection-content": {
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
            linear-gradient(to bottom, ${bgColor} 0px, transparent 10%), 
            linear-gradient(to left, ${bgColor} 0px, transparent 15% 75%, ${bgColor})
          `,
        },

        "& .ProductsSection-image": {
          gridColumn: "1 / -1",
          gridRow: "2 / -1",
          objectPosition: "center -16px",
          minHeight: 500,
        },

        "& .ProductsSection-content": {
          gridColumn: "1 / -1",
          gridRow: "1 / 2",
          margin: theme.spacing(8, 0, 0, 0),
        },
      },
    },
  };
});

//Component
export const ProductsHeroSection = (props: ProductsHeroSectionProps) => {
  return (
    <SectionStyles>
      <Container>
        <ImageStyles
          src={heroImage}
          alt="Products hero"
          priority
          fill
          sizes="(max-width: 660px) 828px, 1200px"
          quality={90}
        />
        <ContentStyles>
          <TitleStyles>
            One Platform. <br />
            Endless Products.
          </TitleStyles>
          <TextStyles sx={{ fontStyle: "italic" }}>
            “We need a landing page for our B2B SaaS platform.”
          </TextStyles>
          <TextStyles sx={{ fontStyle: "italic" }}>
            “Create some social tiles for our upcoming webinar.”
          </TextStyles>
          <TextStyles sx={{ fontStyle: "italic" }}>
            “Design 3 ad creatives for our new product release.”
          </TextStyles>
          <TextStyles>
            We help marketing teams quickly go from concept to collateral: one
            platform to manage all your products.
          </TextStyles>
          <TextStyles>
            Your Media Shower subscription includes{" "}
            <strong>monthly content creation credits</strong> that you can spend
            on:
          </TextStyles>
        </ContentStyles>
      </Container>
    </SectionStyles>
  );
};
