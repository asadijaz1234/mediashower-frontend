import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";

//Interfaces
export interface ProductCardTextProps extends TypographyProps {}

//Styles
const ProductCardTextStyles = styled(
  (props: TypographyProps) => <Typography variant="h6" {...props} />,
  {
    target: "ProductCard-text",
  }
)(({ theme }) => {
  return {
    color: "#fff",
    maxWidth: 268,
    textAlign: "center",
    zIndex: 2,
  };
});

//Component
export const ProductCardText = (props: ProductCardTextProps) => {
  return <ProductCardTextStyles {...props} />;
};
