import Image from "next/image";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

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
import landingPageImage1 from "~/assets/images/products-page/landing-page-1.jpg";
import landingPageImage2 from "~/assets/images/products-page/landing-page-2.jpg";
import landingPageImage3 from "~/assets/images/products-page/landing-page-3.jpg";

//Interfaces
export interface ProductsLandingPagesSectionProps
  extends React.ComponentPropsWithoutRef<"div"> {}

//Styles
const ProductCardLanding3Styles = styled(ProductCard)(({ theme }) => {
  return {
    backgroundColor: "#fff",

    "& img": {
      objectFit: "contain",
      objectPosition: "center",
    },
  };
});

const SectionStyles = styled((props) => (
  <PageSection disableMargin {...props} />
))(({ theme }) => {
  return {
    backgroundColor: theme.palette.grey[150],

    [theme.breakpoints.down("lg")]: {
      "& .PageSectionSubtitle-root": {
        maxWidth: 580,
      },

      "& .ProductCard-root": {
        minHeight: 500,
      },
    },

    [theme.breakpoints.down("sm")]: {
      "& .ProductCard-root": {
        minHeight: 400,
      },
    },
  };
});

//Component
export const ProductsLandingPagesSection = (
  props: ProductsLandingPagesSectionProps
) => {
  return (
    <SectionStyles {...props}>
      <Container>
        <PageSectionTitle gutterBottom>Better landing pages</PageSectionTitle>
        <PageSectionSubtitle gutterBottom>
          Our best-practice landing page layout converts more visitors into
          leads, and more leads into customers.
        </PageSectionSubtitle>
        <ProductCardList>
          <ProductCard shadowed="hover">
            <Image
              src={landingPageImage1}
              alt="Landing page 1"
              fill
              sizes="825px"
              quality={100}
            />
            <ProductCardText>
              Landing pages for financial reporting company, acting as lead
              magnets for target CFOs
            </ProductCardText>
          </ProductCard>
          <ProductCard shadowed="hover">
            <Image
              src={landingPageImage2}
              alt="Landing page 2"
              fill
              sizes="825px"
              quality={100}
            />
            <ProductCardText>
              B2B landing pages for AI-enabled consumer intelligence company,
              targeted to brand managers
            </ProductCardText>
          </ProductCard>
          <ProductCardLanding3Styles shadowed="hover">
            <Image
              src={landingPageImage3}
              alt="Landing page 3"
              fill
              sizes="825px"
              quality={100}
            />
            <ProductCardText>
              B2C landing pages for national home improvement retailer, targeted
              to homeowners
            </ProductCardText>
          </ProductCardLanding3Styles>
        </ProductCardList>
      </Container>
    </SectionStyles>
  );
};
