import Image from "next/image";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

import {
  PageSection,
  PageSectionProps,
  PageSectionSubtitle,
  PageSectionTitle,
} from "~/components/page-section";
import salesImage1 from "~/assets/images/products-page/sales-1.png";
import salesImage2 from "~/assets/images/products-page/sales-2.png";
import salesImage3 from "~/assets/images/products-page/sales-3.png";
import { ProductCard, ProductCardText } from "~/components/product-card";

//Interfaces
export interface ProductsSalesSectionProps extends PageSectionProps {}

//Styles
const ImagesLayoutStyles = styled("div", {
  target: "ProductsSalesSectionImagesLayout-root",
})(({ theme }) => {
  return {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "auto",
    gridTemplateRows: "repeat(7, 1fr)",
    gridGap: theme.spacing(2),
    maxWidth: 476,
    maxHeight: 714,
    minHeight: 714,

    "& .ProductCard-root": {
      minHeight: "auto",

      "&:nth-of-type(1)": {
        gridRow: "1 / 7",
        gridColumn: "1 / 2",
      },

      "&:nth-of-type(2)": {
        gridRow: "2 / 5",
        gridColumn: "2 / 3",
      },

      "&:nth-of-type(3)": {
        gridRow: "5 / 8",
        gridColumn: "2 / 3",
      },

      "& .ProductCard-text": {
        fontSize: theme.typography.pxToRem(16),
        padding: theme.spacing(0, 1.5),
        marginBottom: theme.spacing(2),
      },

      "& img": {
        position: "relative",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "top left",
      },

      "&::after": {
        backgroundImage: `linear-gradient(to top, #292929 50%, transparent)`,
      },

      "&:hover": {
        "&:nth-of-type(1)": {
          "& .ProductCard-text": {
            transform: "translate3d(-50%, -50%, 0)",
          },
        },

        "&::after": {
          opacity: 0.85,
        },
      },
    },

    [theme.breakpoints.down("lg")]: {
      minHeight: 420,
    },

    [theme.breakpoints.down("sm")]: {
      "& .ProductCard-root": {
        "& .ProductCard-text": {
          fontSize: theme.typography.pxToRem(14),
          padding: theme.spacing(0, 1),
          marginBottom: theme.spacing(1),
        },
      },
    },
  };
});

const HeaderStyles = styled("header", {
  target: "ProductsSalesSectionHeader-root",
})(({ theme }) => {
  return {};
});

export const SectionStyles = styled((props) => (
  <PageSection disableMargin disablePadding {...props} />
))(({ theme }) => {
  const bgColor = "#e3f5fe";

  return {
    backgroundColor: bgColor,
    padding: theme.spacing(11, 0),

    "& .MuiContainer-root": {
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
      justifyContent: "space-between",

      "& .ProductsSalesSectionHeader-root": {
        maxWidth: 358,
        margin: theme.spacing(3, 9, 3, 3),
      },

      "& .PageSectionTitle-root, & .PageSectionSubtitle-root": {
        textAlign: "left",
      },

      "& .PageSectionSubtitle-root": {
        lineHeight: 1.6,
      },
    },

    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(6, 0, 8, 0),

      "& .MuiContainer-root": {
        flexFlow: "column nowrap",
        alignItems: "center",
        justifyContent: "flex-start",

        "& .ProductsSalesSectionHeader-root": {
          maxWidth: 580,
          margin: theme.spacing(0, 0, 5, 0),
          order: 0,
        },

        "& .ProductsSalesSectionImagesLayout-root": {
          order: 1,
        },

        "& .PageSectionTitle-root, & .PageSectionSubtitle-root": {
          textAlign: "center",
        },
      },
    },
  };
});

//Component
export const ProductsSalesSection = (props: ProductsSalesSectionProps) => {
  return (
    <SectionStyles {...props}>
      <Container>
        <ImagesLayoutStyles>
          <ProductCard shadowed="hover">
            <Image src={salesImage1} alt="" sizes="1200px" quality={100} />
            <ProductCardText>
              Valuable infographic for B2B customer data platform, targeted to
              marketing C-suite
            </ProductCardText>
          </ProductCard>
          <ProductCard shadowed="hover">
            <Image src={salesImage2} alt="" sizes="1200px" quality={100} />
            <ProductCardText>
              Thought leadership series for document management solution,
              targeted to insurance executives
            </ProductCardText>
          </ProductCard>
          <ProductCard shadowed="hover">
            <Image src={salesImage3} alt="" sizes="1200px" quality={100} />
            <ProductCardText>
              Research report for SaaS management company, quickly summarized
              for IT decision makers
            </ProductCardText>
          </ProductCard>
        </ImagesLayoutStyles>
        <HeaderStyles>
          <PageSectionTitle gutterBottom>
            Better sales collateral
          </PageSectionTitle>
          <PageSectionSubtitle>
            Everything to keep your sales team happy and high-performing, from
            nurture campaigns to LinkedIn newsletters.
          </PageSectionSubtitle>
        </HeaderStyles>
      </Container>
    </SectionStyles>
  );
};
