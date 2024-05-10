import Image from "next/image";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

import {
  PageSection,
  PageSectionProps,
  PageSectionSubtitle,
  PageSectionTitle,
} from "~/components/page-section";
import {
  ProductCard,
  ProductCardList,
  ProductCardText,
} from "~/components/product-card";
import image1 from "~/assets/images/products-page/better-post-1.jpg";
import image2 from "~/assets/images/products-page/better-post-2.jpg";
import image3 from "~/assets/images/products-page/better-post-3.jpg";

//Interfaces
export interface ProductsPostsSectionProps extends PageSectionProps {}

//Styles
const SectionStyles = styled(PageSection)(({ theme }) => {
  return {
    "& .ProductCardList-root": {
      gridGap: theme.spacing(3),
    },

    "& .ProductCard-root": {
      minHeight: 182,

      "& img": {
        objectPosition: "left top",
      },

      "&::after": {
        backgroundImage: `linear-gradient(to top, #292929 50%, transparent)`,
      },

      "& .ProductCard-text": {
        maxWidth: 332,
        marginBottom: theme.spacing(3),
      },

      "&:hover": {
        "&::after": {
          opacity: 0.85,
        },
      },
    },

    [theme.breakpoints.up("lg")]: {
      "& .ProductCard-root": {
        "& .ProductCard-text": {
          maxWidth: 264,
          marginBottom: theme.spacing(2),
        },
      },
    },

    [theme.breakpoints.down("lg")]: {
      "& .PageSectionSubtitle-root": {
        maxWidth: 580,
      },

      "& .ProductCard-root": {
        minHeight: 280,
      },
    },

    [theme.breakpoints.down("sm")]: {
      "& .ProductCard-root": {
        minHeight: 242,

        "& .ProductCard-text": {
          fontSize: theme.typography.pxToRem(16),
          padding: theme.spacing(0, 1.5),
          marginBottom: theme.spacing(2),
        },
      },
    },
  };
});

//Component
export const ProductsPostsSection = (props: ProductsPostsSectionProps) => {
  return (
    <SectionStyles {...props} disablePadding>
      <Container>
        <PageSectionTitle gutterBottom>Better social posts</PageSectionTitle>
        <PageSectionSubtitle gutterBottom>
          A complete package to promote each content deliverable, from tweets to
          cards. Just copy, paste, and post.
        </PageSectionSubtitle>
        <ProductCardList>
          <ProductCard shadowed="hover">
            <Image
              src={image1}
              alt="Better Post 1"
              fill
              sizes="825px"
              quality={100}
            />
            <ProductCardText>
              Lead-generating social posts for healthcare services provider,
              driving to downloadable guides
            </ProductCardText>
          </ProductCard>
          <ProductCard shadowed="hover">
            <Image
              src={image2}
              alt="Better Post 2"
              fill
              sizes="825px"
              quality={100}
            />
            <ProductCardText>
              Social campaign for technology consulting firm, focused on
              marketing professionals
            </ProductCardText>
          </ProductCard>
          <ProductCard shadowed="hover">
            <Image
              src={image3}
              alt="Better Post 3"
              fill
              sizes="825px"
              quality={100}
            />
            <ProductCardText>
              Promotional campaign for digital asset exchange, targeted to
              retail and institutional traders
            </ProductCardText>
          </ProductCard>
        </ProductCardList>
      </Container>
    </SectionStyles>
  );
};
