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
import image1 from "~/assets/images/products-page/better-blog-1.jpg";
import image2 from "~/assets/images/products-page/better-blog-2.jpg";
import image3 from "~/assets/images/products-page/better-blog-3.jpg";

//Interfaces
export interface ProductsBlogsSectionProps extends PageSectionProps {}

//Styles
const SectionStyles = styled(PageSection)(({ theme }) => {
  return {
    [theme.breakpoints.down("lg")]: {
      "& .PageSectionSubtitle-root": {
        maxWidth: 580,
      },

      "& .ProductCard-root": {
        minHeight: 500,

        "& img": {
          objectPosition: "left top",
        },
      },
    },

    [theme.breakpoints.down("sm")]: {
      "& .ProductCard-root": {
        minHeight: 400,

        "& img": {
          objectPosition: "center top",
        },
      },
    },
  };
});

//Component
export const ProductsBlogsSection = (props: ProductsBlogsSectionProps) => {
  return (
    <SectionStyles {...props} disablePadding>
      <Container>
        <PageSectionTitle gutterBottom>Better blogs</PageSectionTitle>
        <PageSectionSubtitle gutterBottom>
          Rich, delicious blog posts that drive measurable marketing results:
          more rankings, more traffic, more leads.
        </PageSectionSubtitle>
        <ProductCardList>
          <ProductCard
            shadowed="hover"
            // href="https://ringcentral.com/us/en/blog/cloud-migration-financial-services/"
            // target="_blank"
            // rel="noopener noreferer"
          >
            <Image src={image1} alt="Blog 1" fill sizes="825px" quality={95} />
            <ProductCardText>
              High-performing blogs for high-performing cloud communications
              provider, ranked on Google Page 1
            </ProductCardText>
          </ProductCard>
          <ProductCard
            shadowed="hover"
            // href="https://meltwater.com/en/blog/what-are-twitter-impressions-reach"
            // target="_blank"
            // rel="noopener noreferer"
          >
            <Image src={image2} alt="Blog 2" fill sizes="825px" quality={100} />
            <ProductCardText>
              Top-ranked blogs for top-ranked media monitoring company, with
              Google Featured Snippet
            </ProductCardText>
          </ProductCard>
          <ProductCard
            shadowed="hover"
            // href="https://glanbianutritionals.com/en/nutri-knowledge-center/insights/whats-next-plant-based-sports-ingredients"
            // target="_blank"
            // rel="noopener noreferer"
          >
            <Image src={image3} alt="Blog 3" fill sizes="825px" quality={100} />
            <ProductCardText>
              Global-focused blogs for global nutrition company, targeted to
              food and beverage industry
            </ProductCardText>
          </ProductCard>
        </ProductCardList>
      </Container>
    </SectionStyles>
  );
};
