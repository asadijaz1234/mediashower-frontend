import Image from "next/image";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

import {
  PageSection,
  PageSectionSubtitle,
  PageSectionTitle,
} from "~/components/page-section";
import {
  ProductCard,
  ProductCardList,
  ProductCardText,
} from "~/components/product-card";
import videoImage1 from "~/assets/images/products-page/better-video-1.jpg";
import videoImage2 from "~/assets/images/products-page/better-video-2.jpg";
import videoImage3 from "~/assets/images/products-page/better-video-3.jpg";
import { PlayRoundedSvg } from "~/assets/svg-icons";

//Interfaces
export interface ProductsVideosSectionProps
  extends React.ComponentPropsWithoutRef<"div"> {}

//Styles
const PlayIconStyles = styled("div", {
  target: "ProductVideoCardIcon-root",
})(({ theme }) => {
  return {
    position: "absolute",
    top: theme.spacing(4),
    right: theme.spacing(3.25),
    fontSize: theme.typography.pxToRem(43),
    color: "#fff",

    "& svg": {
      width: "1em",
      height: "1em",
    },
  };
});

const SectionStyles = styled(PageSection)(({ theme }) => {
  return {
    backgroundColor: theme.palette.grey[150],

    "& .ProductCard-root": {
      "&:first-of-type": {
        "& img": {
          objectPosition: "center top",
          transform: "scale(1.1) translateY(-30px)",
          transformOrigin: "center top",
        },

        "&::after": {
          backgroundImage: `
            linear-gradient(to top, #464646 10%, transparent 54%)
          `,
        },
      },
    },

    [theme.breakpoints.down("lg")]: {
      "& .PageSectionSubtitle-root": {
        maxWidth: 580,
      },

      "& .ProductCard-root": {
        minHeight: 420,

        "&:first-of-type": {
          "& img": {
            objectPosition: "center -50px",
            transform: "none",
          },
        },
      },
    },

    [theme.breakpoints.down("sm")]: {
      "& .ProductCard-root": {
        minHeight: 364,

        "&:first-of-type": {
          "& img": {
            objectPosition: "center -32px",
          },
        },
      },
    },
  };
});

//Component
export const ProductsVideosSection = (props: ProductsVideosSectionProps) => {
  return (
    <SectionStyles {...props}>
      <Container>
        <PageSectionTitle gutterBottom>Better videos</PageSectionTitle>
        <PageSectionSubtitle gutterBottom>
          Interviews with your subject matter experts, key takeaways from your
          webinars, product walkthroughs, and more.
        </PageSectionSubtitle>
        <ProductCardList>
          <ProductCard
            shadowed="hover"
            component="a"
            href="https://www.youtube.com/watch?v=Wk6eixaOgnM"
            target="_blank"
            rel="noopener noreferer"
          >
            <Image
              src={videoImage1}
              alt="Video 1"
              fill
              sizes="750px"
              quality={90}
            />
            <ProductCardText>
              Explainer video for financial website, educating value investors
              on portfolio and approach
            </ProductCardText>
            <PlayIconStyles>
              <PlayRoundedSvg />
            </PlayIconStyles>
          </ProductCard>

          <ProductCard
            shadowed="hover"
            component="a"
            href="https://youtu.be/C9K7UpS1W5w"
            target="_blank"
            rel="noopener noreferer"
          >
            <Image
              src={videoImage2}
              alt="Video 2"
              fill
              sizes="750px"
              quality={90}
            />
            <ProductCardText>
              Tiktok-style short video explaining complex fintech concepts in
              user-friendly terms
            </ProductCardText>
            <PlayIconStyles>
              <PlayRoundedSvg />
            </PlayIconStyles>
          </ProductCard>
          <ProductCard
            shadowed="hover"
            component="a"
            href="https://youtu.be/RbwSc_2pbOM"
            target="_blank"
            rel="noopener noreferer"
          >
            <Image
              src={videoImage3}
              alt="Video 3"
              fill
              sizes="750px"
              quality={90}
            />
            <ProductCardText>
              Our own Media Shower trailer. Enjoy!
            </ProductCardText>
            <PlayIconStyles>
              <PlayRoundedSvg />
            </PlayIconStyles>
          </ProductCard>
        </ProductCardList>
      </Container>
    </SectionStyles>
  );
};
