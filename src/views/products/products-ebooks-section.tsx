import Image from "next/image";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

import {
  PageSection,
  PageSectionProps,
  PageSectionSubtitle,
  PageSectionTitle,
} from "~/components/page-section";
import ebookImage1 from "~/assets/images/products-page/ebook-1.png";
import ebookImage2 from "~/assets/images/products-page/ebook-2.png";
import ebookImage3 from "~/assets/images/products-page/ebook-3.png";
import { ProductCard, ProductCardText } from "~/components/product-card";

//Interfaces
export interface ProductsEbooksSectionProps extends PageSectionProps {}

//Styles
const ImagesLayoutStyles = styled("div")(({ theme }) => {
  return {
    position: "relative",
    display: "grid",
    gridTemplateRows: "auto",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridGap: theme.spacing(2),
    minHeight: 486,
    maxWidth: 520,

    "& .ProductCard-root": {
      minHeight: "auto",

      "&:nth-of-type(1)": {
        gridRow: "1 / 2",
        gridColumn: "2 / -1",
      },

      "&:nth-of-type(2)": {
        gridRow: "2 / -1",
        gridColumn: "1 / 3",

        "& .ProductCard-text": {
          fontSize: theme.typography.pxToRem(16),
          padding: theme.spacing(0, 2),
          marginBottom: theme.spacing(2),
        },
      },

      "&:nth-of-type(3)": {
        gridRow: "2 / -1",
        gridColumn: "3 / 5",

        "& .ProductCard-text": {
          fontSize: theme.typography.pxToRem(16),
          padding: theme.spacing(0, 2),
          marginBottom: theme.spacing(2),
        },
      },

      "&::after": {
        backgroundImage: `linear-gradient(to top, #292929 50%, transparent)`,
      },

      "& img": {
        position: "relative",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "top left",
      },

      "&:hover": {
        "&::after": {
          opacity: 0.9,
        },
      },
    },

    [theme.breakpoints.down("lg")]: {
      minHeight: 300,
    },

    [theme.breakpoints.down("sm")]: {
      "& .ProductCard-root": {
        "&:nth-of-type(1)": {
          "& .ProductCard-text": {
            fontSize: theme.typography.pxToRem(14),
            padding: theme.spacing(0, 1),
            marginBottom: theme.spacing(1),
          },
        },

        "&:nth-of-type(2)": {
          "& .ProductCard-text": {
            fontSize: theme.typography.pxToRem(14),
            padding: theme.spacing(0, 1),
            marginBottom: theme.spacing(1),
          },
        },

        "&:nth-of-type(3)": {
          "& .ProductCard-text": {
            fontSize: theme.typography.pxToRem(14),
            padding: theme.spacing(0, 1),
            marginBottom: theme.spacing(1),
          },
        },
      },
    },
  };
});

const HeaderStyles = styled("header", {
  target: "ProductsEbooksSectionHeader-root",
})(({ theme }) => {
  return {};
});

export const SectionStyles = styled((props) => (
  <PageSection disableMargin disablePadding {...props} />
))(({ theme }) => {
  const bgColor = "#fee9ce";

  return {
    backgroundColor: bgColor,
    padding: theme.spacing(11, 0),

    "& .MuiContainer-root": {
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
      justifyContent: "space-between",

      "& .ProductsEbooksSectionHeader-root": {
        maxWidth: 358,
        margin: theme.spacing(3, 3, 3, 9),
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

        "& .ProductsEbooksSectionHeader-root": {
          maxWidth: 580,
          margin: theme.spacing(0, 0, 5, 0),
        },

        "& .PageSectionTitle-root, & .PageSectionSubtitle-root": {
          textAlign: "center",
        },
      },
    },
  };
});

//Component
export const ProductsEbooksSection = (props: ProductsEbooksSectionProps) => {
  return (
    <SectionStyles {...props}>
      <Container>
        <HeaderStyles>
          <PageSectionTitle gutterBottom>Better ebooks</PageSectionTitle>
          <PageSectionSubtitle>
            From business briefs to deep dives, from research reports to
            recruitment resources, designed pixel-perfect to your brand
            standards.
          </PageSectionSubtitle>
        </HeaderStyles>
        <ImagesLayoutStyles>
          <ProductCard shadowed="hover">
            <Image src={ebookImage1} alt="" sizes="1200px" quality={95} />
            <ProductCardText>
              Guides on best practices for technology trade association, used
              for member recruitment
            </ProductCardText>
          </ProductCard>
          <ProductCard shadowed="hover">
            <Image src={ebookImage2} alt="" sizes="1200px" quality={100} />
            <ProductCardText>
              Demand-gen assets for leading CPG marketing agency, targeted to
              decision-makers
            </ProductCardText>
          </ProductCard>
          <ProductCard shadowed="hover">
            <Image src={ebookImage3} alt="" sizes="1200px" quality={100} />
            <ProductCardText>
              Industry reports for ERP software provider targeting specific
              customer verticals
            </ProductCardText>
          </ProductCard>
        </ImagesLayoutStyles>
      </Container>
    </SectionStyles>
  );
};
